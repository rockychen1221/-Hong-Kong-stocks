// 打新记录数据
import data2 from "@/assets/stockList";
const listNumber = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  12,
  14,
  15,
  16,
  18,
  20,
  25,
  30,
  35,
  40,
  45,
  50,
  55,
  60,
  65,
  70,
  75,
  80,
  85,
  90,
  95,
  100,
  110,
  120,
  130,
  140,
  150,
  160,
  170,
  180,
  190,
  200,
  250,
  300,
  350,
  400,
  450,
  500,
  600,
  700,
  800,
  900,
  1000,
  1200,
  1300,
  1400,
  1500,
  1600,
  1700,
  1800,
  1900,
  2000,
];

const data = [
  {
    name: "快手",
    每手股数: 50,
    上限招股价: 93,
    打新日期: "2021/1/26",
    记息天数: 6,
    中签定价: 0,
    上市日期: "2021/2/5",
    集资金额: 20795000000,
    申购总金额: 672260000000,
    回拨比例: 0.1,
    甲组申购金额占比: 0.17,
    一手申购人数占比: 0.5,
    甲组人数: 1200000,
    listNumber,
  },
  {
    name: "蓝月亮",
    每手股数: 500,
    上限招股价: 13.16,
    打新日期: "2020/12/4",
    记息天数: 6,
    中签定价: 0,
    上市日期: "2020/12/20",
    集资金额: 9832184740,
    申购总金额: 100000000000,
    回拨比例: 0.5,
    甲组申购金额占比: 0.25,
    一手申购人数占比: 0.4,
    甲组人数: 500000,
    listNumber,
  },
  {
    name: "泡泡玛特",
    每手股数: 200,
    上限招股价: 38.5,
    打新日期: "2020/12/1",
    记息天数: 6,
    中签定价: 0,
    上市日期: "2020/12/10",
    集资金额: 5225091641,
    申购总金额: 200000000000,
    回拨比例: 0.47,
    甲组申购金额占比: 0.25,
    一手申购人数占比: 0.4,
    甲组人数: 500000,
    listNumber,
  },
  {
    name: "京东健康",
    每手股数: 50,
    上限招股价: 71.3,
    打新日期: "2020/11/26",
    记息天数: 6,
    中签定价: 0,
    集资金额: 27236600000,
    申购总金额: 560000000000,
    回拨比例: 0.11,
    甲组申购金额占比: 0.25,
    一手申购人数占比: 0.4,
    甲组人数: 846000,
    listNumber,
  },
  {
    name: "恒大物业",
    每手股数: 500,
    上限招股价: 9.75,
    打新日期: "2020/11/23",
    记息天数: 5,
    中签定价: 0,
    集资金额: 15810814500,
    申购总金额: 25000000000,
    回拨比例: 0.1,
    甲组申购金额占比: 0.25,
    一手申购人数占比: 0.4,
    甲组人数: 186000,
    listNumber,
  },
  {
    name: "蚂蚁集团",
    每手股数: 50,
    上限招股价: 80,
    打新日期: "2020/9/18",
    记息天数: 7,
    中签定价: 0,
    集资金额: 127900000000,
    申购总金额: 1242800000000,
    回拨比例: 0.1,
    甲组申购金额占比: 0.25,
    一手申购人数占比: 0.4,
    甲组人数: 1500000,
    listNumber,
  },
  {
    name: "先声药业",
    每手股数: 1000,
    上限招股价: 13.8,
    打新日期: "2020/10/13",
    记息天数: 7,
    中签定价: 0,
    集资金额: 3601800000,
    申购总金额: 250000000000,
    回拨比例: 0.5,
    甲组申购金额占比: 0.3,
    一手申购人数占比: 0.4,
    甲组人数: 300000,
    listNumber,
  },

  {
    name: "卓越商企服务",
    每手股数: 1000,
    上限招股价: 10.68,
    打新日期: "2020/10/7",
    记息天数: 4,
    中签定价: 0,
    集资金额: 3204000000,
    申购总金额: 200000000000,
    回拨比例: 0.5,
    甲组申购金额占比: 0.25,
    一手申购人数占比: 0.4,
    甲组人数: 450000,
    listNumber,
  },
  {
    name: "云顶新耀-B",
    每手股数: 500,
    上限招股价: 55,
    打新日期: "2020/9/24",
    记息天数: 8,
    中签定价: 0,
    集资金额: 3494700000,
    申购总金额: 148300000000,
    回拨比例: 0.5,
    甲组申购金额占比: 0.22,
    一手申购人数占比: 0.4,
    甲组人数: 350000,
    listNumber,
  },
  {
    name: "嘉和生物-B",
    每手股数: 500,
    上限招股价: 24,
    打新日期: "2020/9/23",
    记息天数: 8,
    中签定价: 0,
    集资金额: 2877144000,
    申购总金额: 383800000000,
    回拨比例: 0.5,
    甲组申购金额占比: 0.22,
    一手申购人数占比: 0.31,
    甲组人数: 600000,
    listNumber,
  },
  {
    // 券商只有一半放额度(华泰没放额度),都只有10倍,前期不太热想抢明源云,后期又想留着打嘉和
    // 基本面比福禄好,同期前面有明源云, 一般资金都优先打明源云,
    // 好在后面福禄中签释放了额度
    name: "东软教育",
    每手股数: 800,
    上限招股价: 6.22,
    打新日期: "2020/9/17",
    记息天数: 6,
    中签定价: 0,
    集资金额: 1038740000,
    申购总金额: 50000000000,
    回拨比例: 0.5,
    甲组申购金额占比: 0.35,
    一手申购人数占比: 0.5,
    甲组人数: 150000,
    listNumber,
  },
  {
    name: "明源云",
    每手股数: 1000,
    上限招股价: 16.5,
    打新日期: "2020/9/15",
    记息天数: 6,
    中签定价: 0,
    集资金额: 6171000000,
    申购总金额: 300000000000,
    回拨比例: 0.37,
    甲组申购金额占比: 0.25,
    一手申购人数占比: 0.4,
    甲组人数: 500000,
    listNumber,
  },
  {
    name: "乐享互动",
    每手股数: 1000,
    上限招股价: 3.21,
    打新日期: "2020/9/10",
    记息天数: 7,
    中签定价: 0,
    集资金额: 1745277000,
    申购总金额: 226200000000,
    // 申购总金额: 284989000000,
    回拨比例: 0.5,
    甲组申购金额占比: 0.3,
    // 甲组申购金额占比: 0.27,
    一手申购人数占比: 0.5,
    甲组人数: 450000,
    // 甲组人数: 352495,
    listNumber,
  },
  {
    name: "福禄控股",
    每手股数: 500,
    上限招股价: 8.9,
    打新日期: "2020/9/7",
    记息天数: 6,
    中签定价: 0,
    上市日期: "2020/9/18",
    集资金额: 890000000,
    申购总金额: 112000000000,
    回拨比例: 0.5,
    甲组申购金额占比: 0.387,
    一手申购人数占比: 0.51,
    甲组人数: 382838,
    listNumber,
  },
  {
    name: "农夫山泉",
    每手股数: 200,
    上限招股价: 21.5,
    打新日期: "2020/8/25",
    记息天数: 10,
    中签定价: 21.5,
    上市日期: "2020/9/8",
    集资金额: 8349000000,
    申购总金额: 670941000000,
    回拨比例: 0.29,
    甲组申购金额占比: 0.22,
    一手申购人数占比: 0.3167,
    甲组人数: 680000,
    listNumber,
  },
];

export default data;
