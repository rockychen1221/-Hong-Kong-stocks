<template>
  <div class="hello" style="margin: 0 10px">
    <h3>配售基础资料</h3>
    <div class="box">
      <el-input
        class="input"
        placeholder="请输入股票名称"
        clearable
        v-model="selectName"
        @keyup.enter.native="clickSearch(selectName, dataObj)"
      >
        <template #append>
          <el-button
            @click="clickSearch(selectName, dataObj)"
            slot="append"
            icon="el-icon-search"
          ></el-button>
        </template>
      </el-input>
      <div class="text">模糊匹配,支持股票代码,可以搜索多个,用逗号隔开</div>
    </div>

    <el-table
      :data="dataObj.tableData"
      style="width: 100%"
      border
      height="700px"
      id="tableData2"
      :row-class-name="myJoinActivity"
      v-loading="loading"
    >
      <el-table-column
        prop="name"
        label="股票/资料"
        width="160"
        fixed
      ></el-table-column>
      <el-table-column
        sortable
        v-for="(i, index) in tableKeyList2"
        :key="index"
        :prop="i"
        :label="i"
        width="130"
        align="right"
      >
        <template #default="scope">
          {{ filters(scope.row[i], i) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// 配售数据
import { onMounted, reactive, ref, watch } from "vue";
import { formart } from "../utils/CreateData";
import stockData from "../assets/data";

const IPO记录 = (
  name,
  股票代号,
  上市日期,
  上限招股价,
  股价,
  总股数,
  公开发售占比,
  公开配售倍数,
  国际配售倍数,
  创业板,
  中签
) => {
  return {
    name,
    股票代号,
    上市日期,
    上限招股价,
    股价,
    总股数,
    公开发售占比,
    公开配售倍数,
    国际配售倍数,
    创业板: 0,
    中签,
  };
};

function ajax(params) {
  return fetch(
    "https://jybdata.iqdii.com/jybapp/IPOService/GetPlacingResult?v=" +
      Math.random(),
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
      },
      referrer: "https://www.aipo.org/Home/AipoDetail?stockCode=" + params,
      referrerPolicy: "no-referrer-when-downgrade",
      body: `{"code": "E${params}", "count": "-1" }`,
      method: "POST",
      mode: "cors",
      credentials: "omit",
    }
  );
}

function delay(second = 2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, second * 1000);
  });
}
let dataIPO = [];
async function run(arr) {
  let PromiseArr = [];
  for (let i = 0; i < arr.length; i++) {
    PromiseArr.push(ajax(arr[i].symbol));
    // 15个并发数
    if (PromiseArr.length === 15 || i === arr.length - 1) {
      const a = await Promise.all(PromiseArr);
      let tempArr = [];
      a.forEach((ele) => {
        tempArr.push(ele.json());
      });
      const b = await Promise.all(tempArr);
      // 处理返回结果
      b.forEach((ele) => {
        if (ele.result === 1 && ele.data) {
          dataIPO.push(ele.data);
        }
      });
      PromiseArr = [];
      await delay();
    }
  }

  let IPO记录列表 = dataIPO.map((ele) => {
    const {
      codes_rate,
      group,
      head_hammer,
      ipo_pricing,
      list,
      lot,
      name,
      num,
      placement_times,
      price_ceiling,
      price_floor,
      rate,
      rlink,
      slink,
      subscribed,
      sz,
      whiteForm,
      yellowForm,
    } = ele;

    const index = name.indexOf("－") < 0 ? name.length : name.indexOf("－");
    const otherIpoData = stockData.filter((ele) => {
      if (ele.name.search(name.substring(0, index)) > -1) {
        return ele;
      }
    });
    return IPO记录(
      name,
      otherIpoData[0] ? otherIpoData[0].symbol : "",
      otherIpoData[0] ? otherIpoData[0].listing_date : "",
      ipo_pricing,
      ipo_pricing,
      "",
      otherIpoData[0]
        ? Number(otherIpoData[0].callback_ratio) == 0
          ? Number(otherIpoData[0].raise_money) /
            Number(otherIpoData[0].raise_money_amount)
          : Number(otherIpoData[0].callback_ratio)
        : 0,
      subscribed,
      placement_times,
      otherIpoData[0] ? (otherIpoData[0].market_name == "主板" ? 1 : 0) : 0,
      list
    );
  });
  // console.log(IPO记录列表);
  return IPO记录列表;
}

export default {
  name: "list",
  setup() {
    const dataObj = reactive({
      // 基础资料表格
      tableData: dataIPO,
    });

    let loading = ref(true);

    onMounted(async () => {
      const ipoData = await run(stockData);
      dataObj.tableData = formart(ipoData);
      loading.value = false;
    });

    // 搜索配售券商
    let selectName = ref("");

    // 配售基础资料表格Key List
    const tableKeyList2 = [
      "一手中签率",
      "稳中手数",
      "一手金额",
      "公开配售倍数",
      "总申购人数",
      "公开申购金额",
      "甲组申购倍数",
      "乙组申购倍数",
      "甲组申购金额",
      "乙组申购金额",
      "一手占比",
      "一手人数占比",
      "甲组人数",
      "乙组人数",
      "公开发售占比",
      "募资金额",
      "公开募资金额",
      "公开发售手数",
      "股票代号",
      "上市日期",
    ];

    // 如果搜索值为空,还原table
    watch(selectName, (newValue) => {
      if (newValue === "") {
        dataObj.tableData = _.cloneDeep(dataIPO);
      }
    });

    return {
      dataObj,
      tableKeyList2,
      selectName,
      clickSearch,
      filters,
      myJoinActivity,
      loading,
    };
  },
};

/**
 * 点击搜索股票
 * @param selectName
 * @param tableData
 */
function clickSearch(selectName, dataObj) {
  let temp = [];
  if (selectName) {
    const nameList = selectName.split(",");
    nameList.forEach((element) => {
      dataObj.tableData.forEach((ele) => {
        if (ele.name.indexOf(element) > -1 || ele.股票代号 === element) {
          temp.push(ele);
        }
      });
    });
    if (temp.length > 0) {
      dataObj.tableData = temp;
    } else {
      this.$message("未找到该股票");
    }
  } else {
    dataObj.tableData = _.cloneDeep(dataIPO);
  }
}

function filters(value, arg1) {
  if (arg1 === "一手金额") {
    return Number(value).toFixed(0);
  }
  if (/公开配售倍数|乙组申购倍数|甲组申购倍数/.test(arg1)) {
    return Number(value).toFixed(1);
  }
  if (
    /一手中签率|甲组平均中签率|乙组平均中签率|公开发售占比|一手占比|一手人数占比/.test(
      arg1
    )
  ) {
    return (value * 100).toFixed(2) + "%";
  }
  if (/甲组申购金额|乙组申购金额|公开申购金额|募资金额/.test(arg1)) {
    return (value / 100000000).toFixed(2) + "亿";
  }
  return value;
}

// 我的活动
function myJoinActivity({ row, rowIndex }) {
  stockData.forEach((l) => {
    if (row.name == l.name) {
      return "red-cell";
    }
  });
  return "";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  display: flex;
  /*justify-content: space-between;*/
  margin-bottom: 20px;
}
.input {
  width: 350px;
}
.text {
  margin-left: 20px;
  line-height: 40px;
}
</style>