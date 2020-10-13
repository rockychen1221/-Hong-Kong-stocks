const 记录 = (
  券商,
  打新手数 = 1,
  打新类型 = 1,
  融资比例 = 0.9,
  融资利率 = 0.0398,
  中签数,
  出售价格,
  出售日期,
  打新手续费
) => {
  let temp = {
    券商,
    打新类型: 打新类型 ? "融资打新" : "现金打新",
    打新手数,
    融资比例,
    融资利率,
    中签数,
  };

  if (出售价格 !== undefined) {
    temp.出售价格 = 出售价格;
  }
  if (出售日期 !== undefined) {
    temp.出售日期 = 出售日期;
  }
  if (打新手续费 !== undefined) {
    temp.打新手续费 = 打新手续费;
  }

  return temp;
};

// {
//   name: "康方生物",
//   每手股数: 1000,
//   上限招股价: 16180,
//   打新日期: "2020/4/14",
//   记息天数: 6,
//   中签定价: 16.18,
//   list: [
//     {
//       券商: "老虎",
//       打新类型: "融资打新",
//       打新手数: 1,
//       融资比例: 0.9,
//       融资利率: 0.038,
//       中签数: 1,
//       出售价格: 111,
//       出售时间: "2020/9/11",
//     },
//   ],
// },

let data = [
  {
    name: "康方生物",
    每手股数: 1000,
    上限招股价: 16.18,
    打新日期: "2020/4/14",
    上市日期: "2020/4/24",
    记息天数: 6,
    中签定价: 16.18,
    list: [记录("老虎", 35, 1, 0.933, 0.035, 1, 24, "2020/4/24")],
  },
  {
    name: "建业新生活",
    每手股数: 1000,
    上限招股价: 0.72,
    打新日期: "2020/5/8",
    记息天数: 6,
    中签定价: 6.85,
    上市日期: "2020/5/15",
    list: [
      记录("老虎", 30, 1, 0.9, 0.035, 1, 8.3, "2020/5/15"),
      记录("富途", 1, 0, 0, 0.035, 0),
      记录("友信", 1, 0, 0, 0.035, 0),
    ],
  },
  {
    name: "沛佳医疗",
    每手股数: 1000,
    上限招股价: 15.36,
    打新日期: "2020/5/8",
    记息天数: 6,
    中签定价: 15.36,
    上市日期: "2020/5/15",
    list: [记录("老虎", 100, 1, 0.933, 0.035, 1, 26.75, "2020/5/15")],
  },
  {
    name: "开拓药业",
    每手股数: 500,
    上限招股价: 20.15,
    打新日期: "2020/5/12",
    记息天数: 6,
    中签定价: 20.15,
    上市日期: "2020/5/22",
    list: [
      记录("老虎", 90, 1, 0.95, 0.035, 1, 20.9, "2020/5/26"),
      记录("富途", 1, 0, 0, 0.035, 0),
      记录("友信", 20, 1, 0.933, 0.035, 1, 22.95, "2020/5/22"),
    ],
  },
  {
    name: "移卡",
    每手股数: 400,
    上限招股价: 16.64,
    打新日期: "2020/5/20",
    记息天数: 4,
    中签定价: 16.64,
    上市日期: "2020/6/1",
    list: [
      记录("尊嘉", 1, 0, 0, 0.035, 0),
      记录("富途", 1, 0, 0, 0.035, 0),
      记录("友信", 1, 0, 0, 0.035, 0),
      记录("耀才", 1, 0, 0, 0.035, 0),
      记录("东财", 25, 1, 0.9, 0.035, 1, 14.6, "2020/6/1"),
      记录("华盛通", 1, 0, 0, 0.035, 0),
    ],
  },
  {
    name: "海纳智能",
    每手股数: 4000,
    上限招股价: 1.5,
    打新日期: "2020/5/20",
    记息天数: 8,
    中签定价: 1.38,
    上市日期: "2020/6/3",
    list: [
      记录("尊嘉", 1, 0, 0, 0.035, 0),
      记录("富途", 1, 0, 0, 0.035, 0),
      记录("友信", 1, 0, 0, 0.035, 0),
      记录("耀才", 1, 0, 0, 0.035, 0),
      记录("华盛通", 1, 0, 0, 0.035, 0),
    ],
  },
  {
    name: "网易",
    每手股数: 100,
    上限招股价: 123,
    打新日期: "2020/6/2",
    记息天数: 5,
    中签定价: 123,
    上市日期: "2020/6/11",
    list: [
      记录("老虎", 45, 1, 0.95, 0.035, 1, 132.9, "2020/6/11"),
      记录("尊嘉", 1, 0, 0, 0.035, 0),
      记录("富途", 15, 1, 0.9, 0.035, 0),
      记录("友信", 1, 0, 0, 0.035, 0),
      记录("耀才", 1, 0, 0, 0.035, 0),
      记录("东财", 1, 0, 0, 0.035, 0),
      记录("玖富", 1, 0, 0, 0.035, 0),
      记录("华盛通", 1, 0, 0, 0.035, 0),
      记录("雪盈", 15, 1, 0.9, 0.035, 0),
      记录("方德", 5, 1, 0.9, 0.035, 1, 132.9, "2020/6/11"),
    ],
  },
  {
    name: "京东",
    每手股数: 50,
    上限招股价: 113,
    打新日期: "2020/6/8",
    记息天数: 6,
    中签定价: 226,
    上市日期: "2020/6/18",
    list: [
      记录("尊嘉", 1, 0, 0, 0.035, 0),
      记录("耀才", 1, 0, 0, 0.035, 1, 239.4, "2020/6/17"),
    ],
  },
  {
    name: "康基医疗",
    每手股数: 500,
    上限招股价: 13.88,
    打新日期: "2020/6/16",
    记息天数: 7,
    中签定价: 13.88,
    上市日期: "2020/6/29",
    list: [
      记录("老虎", 200, 1, 0.95, 0.035, 2, 26.4, "2020/6/29"),
      记录("尊嘉", 20, 1, 0.95, 0.035, 0),
      记录("富途", 5, 1, 0.9, 0.035, 0),
      记录("友信", 2, 1, 0.9, 0.035, 0),
      记录("东财", 1, 1, 0.9, 0.035, 0),
      记录("玖富", 1, 1, 0.9, 0.035, 1, 24.95, "2020/6/26"),
      记录("华盛通", 1, 1, 0.9, 0.035, 1, 24.95, "2020/6/26"),
      记录("华泰", 120, 1, 0.97, 0.035, 2, 26.5, "2020/6/29"),
      记录("艾德", 3, 1, 0.9, 0.035, 0),
    ],
  },
  {
    name: "海吉亚医疗",
    每手股数: 200,
    上限招股价: 18.5,
    打新日期: "2020/6/16",
    记息天数: 7,
    中签定价: 18.5,
    上市日期: "2020/6/29",
    list: [
      记录("老虎", 150, 1, 0.95, 0.035, 2, 24.5, "2020/6/29"),
      记录("富途", 50, 1, 0.9, 0.035, 1, 23.9, "2020/6/29"),
      记录("友信", 10, 1, 0.9, 0.035, 0),
      记录("东财", 45, 1, 0.9, 0.035, 1, 24.3, "2020/6/26"),
      记录("玖富", 15, 1, 0.9, 0.035, 1, 24.5, "2020/6/26"),
      记录("华盛通", 10, 1, 0.9, 0.035, 0),
      记录("华泰", 150, 1, 0.97, 0.035, 2, 24.5, "2020/6/29"),
      记录("艾德", 20, 1, 0.9, 0.035, 0),
    ],
  },
  {
    name: "金融街",
    每手股数: 1000,
    上限招股价: 7.36,
    打新日期: "2020/6/19",
    记息天数: 9,
    中签定价: 7.36,
    上市日期: "2020/7/6",
    list: [记录("尊嘉", 15, 1, 0.9, 0.035, 1, 8.85, "2020/7/7")],
  },
  {
    name: "弘阳服务",
    每手股数: 1000,
    上限招股价: 4.3,
    打新日期: "2020/6/24",
    记息天数: 6,
    中签定价: 4.15,
    上市日期: "2020/7/7",
    list: [
      记录("富途", 5, 1, 0.9, 0.035, 1, 4.85, "2020/7/8"),
      记录("友信", 1, 1, 0.8, 0.035, 0),
    ],
  },
  {
    name: "欧康维视生物",
    每手股数: 500,
    上限招股价: 14.66,
    打新日期: "2020/6/29",
    记息天数: 6,
    中签定价: 14.66,
    上市日期: "2020/7/10",
    list: [
      记录("老虎", 1, 1, 0.5, 0.035, 0),
      记录("尊嘉", 8, 1, 0.9, 0.0488, 1, 34, "2020/7/13"),
      记录("东财", 20, 1, 0.9, 0.0398, 0),
      记录("玖富", 1, 1, 0.9, 0.035, 0),
      记录("华盛通", 1, 1, 0.9, 0.035, 0),
      记录("华泰", 300, 1, 0.97, 0.033, 1, 36, "2020/7/13"),
      记录("艾德", 10, 1, 0.9, 0.0398, 0),
      记录("易昇", 20, 1, 0.95, 0.035, 0),
    ],
  },
  {
    name: "思摩尔国际",
    每手股数: 1000,
    上限招股价: 12.4,
    打新日期: "2020/6/29",
    记息天数: 6,
    中签定价: 12.4,
    上市日期: "2020/7/10",
    list: [
      记录("老虎", 1, 1, 0.5, 0.035, 0),
      记录("尊嘉", 1, 1, 0.9, 0.035, 0),
      记录("富途", 15, 1, 0.9, 0.0398, 1, 24.9, "2020/7/9"),
      记录("友信", 1, 1, 0.8, 0.035, 0),
      记录("东财", 2, 1, 0.9, 0.035, 0),
      记录("玖富", 8, 1, 0.9, 0.0288, 1, 29.6, "2020/7/14"),
      记录("华盛通", 6, 1, 0.9, 0.0398, 1, 28.05, "2020/7/10"),
      记录("艾德", 1, 1, 0.9, 0.035, 0),
    ],
  },
  {
    name: "永泰生物",
    每手股数: 1000,
    上限招股价: 11,
    打新日期: "2020/6/29",
    记息天数: 6,
    中签定价: 11,
    上市日期: "2020/7/10",
    list: [
      记录("富途", 1, 1, 0.9, 0.035, 0),
      记录("东财", 1, 1, 0.9, 0.035, 0),
      记录("玖富", 1, 1, 0.9, 0.035, 0),
      记录("华盛通", 1, 1, 0.9, 0.035, 0),
      记录("华泰", 35, 1, 0.95, 0.033, 1, 15.14, "2020/7/13"),
    ],
  },
  {
    name: "正荣服务",
    每手股数: 1000,
    上限招股价: 4.7,
    打新日期: "2020/6/29",
    记息天数: 6,
    中签定价: 4.55,
    上市日期: "2020/7/10",
    list: [
      记录("老虎", 1, 1, 0.5, 0.035, 0),
      记录("尊嘉", 1, 1, 0.9, 0.035, 1, 5.15, "2020/7/10"),
      记录("富途", 1, 1, 0.9, 0.035, 1, 5.15, "2020/7/10"),
      记录("玖富", 1, 1, 0.9, 0.035, 0),
    ],
  },
  {
    name: "易和国际控股",
    每手股数: 5000,
    上限招股价: 0.6,
    打新日期: "2020/6/30",
    记息天数: 4,
    中签定价: 0.4,
    上市日期: "2020/7/13",
    list: [记录("尊嘉", 5, 1, 0.9, 0.0428, 1, 0.59, "2020/7/10")],
  },
  {
    name: "祖龙娱乐",
    每手股数: 1000,
    上限招股价: 11.6,
    打新日期: "2020/6/30",
    记息天数: 7,
    中签定价: 11.6,
    上市日期: "2020/7/15",
    list: [
      记录("老虎", 20, 1, 0.8, 0.0298, 1, 19, "2020/7/15"),
      记录("尊嘉", 1, 1, 0.9, 0.035, 0),
      记录("华盛通", 1, 1, 0.9, 0.035, 0),
      记录("东财", 10, 1, 0.9, 0.0398, 1, 17.66, "2020/7/15"),
      记录("盈路", 10, 1, 0.9, 0.05, 0),
    ],
  },
  {
    name: "德合集团",
    每手股数: 4000,
    上限招股价: 0.96,
    打新日期: "2020/6/30",
    记息天数: 10,
    中签定价: 0.63,
    上市日期: "2020/7/17",
    list: [记录("尊嘉", 5, 1, 0.9, 0.0428, 0)],
  },
  {
    name: "泰格医药",
    每手股数: 100,
    上限招股价: 100,
    打新日期: "2020/7/28",
    记息天数: 7,
    中签定价: 100,
    上市日期: "2020/8/7",
    list: [
      记录("耀才", 1, 0, 0, 0.035, 1, 118, "2020/8/6"),
      记录("尊嘉", 1, 0, 0, 0.035, 0),
      记录("富途", 35, 1, 0.9, 0.0398, 1, 110.3, "2020/8/14"),
      记录("友信", 1, 0, 0, 0.035, 0),
      记录("华盛通", 1, 0, 0, 0.035, 0),
      记录("东财", 1, 0, 0, 0.035, 0),
      记录("玖富", 1, 0, 0, 0.035, 0),
      记录("华泰", 60, 1, 0.97, 0.035, 1, 110.3, "2020/8/14"),
      记录("艾德", 9, 1, 0.9, 0.038, 0),
      记录("易昇", 20, 1, 0.95, 0.0398, 1, 118.5, "2020/8/6"),
      记录("利弗莫尔", 1, 0, 0, 0.035, 0),
      记录("盈路", 25, 1, 0.95, 0.05, 0),
      记录("青石", 1, 0, 0, 0.035, 0),
      记录("有鱼", 1, 0, 0, 0.035, 0),
      记录("华赢", 15, 1, 0.95, 0.0388, 0),
    ],
  },
  {
    name: "农夫山泉",
    每手股数: 200,
    上限招股价: 21.5,
    打新日期: "2020/8/25",
    记息天数: 10,
    中签定价: 21.5,
    上市日期: "2020/9/8",
    list: [
      记录("华泰", 500, 1, 0.97, 0.033, 2, 35.15, "2020/9/8"),
      记录("老虎", 100, 1, 0.933, 0.0398, 1, 39, "2020/9/8"),
      记录("富途", 50, 1, 0.9, 0.0398, 1, 44.85, "2020/9/7"),
      记录("东财", 50, 1, 0.9, 0.0398, 0),
      记录("华赢", 50, 1, 0.9, 0.0398, 0),
      记录("易昇", 50, 1, 0.9, 0.0398, 1, 34.75, "2020/9/8"),
      记录("长桥", 30, 1, 0.9, 0.0398, 0),
      记录("盈路", 30, 1, 0.9, 0.05, 0),
      记录("雪盈", 15, 1, 0.9, 0.025, 1, 34.5, "2020/9/8"),
      记录("辉立", 20, 1, 0.9, 0, 0),
      记录("佳兆业", 20, 1, 0.9, 0.045, 0),
      记录("阿尔法", 1, 1, 0.9, 0.035, 0),
      记录("利弗莫尔", 1, 1, 0.9, 0.035, 0),
      记录("华盛通", 1, 1, 0.9, 0.035, 0),
      记录("玖富", 1, 1, 0.9, 0.035, 0),
      记录("尊嘉", 1, 1, 0.9, 0.035, 0),
      记录("友信", 1, 1, 0.9, 0.035, 0),
      记录("青石", 1, 1, 0.9, 0.035, 0),
      记录("有鱼", 1, 0, 0, 0.035, 0),
    ],
  },
  {
    name: "百胜中国",
    每手股数: 50,
    上限招股价: 468,
    打新日期: "2020/8/25",
    记息天数: 7,
    中签定价: 412,
    上市日期: "2020/9/10",
    list: [记录("辉立", 1, 1, 1, 0.0288, 0, undefined, undefined, 38)],
  },
  {
    name: "福禄控股",
    每手股数: 500,
    上限招股价: 8.9,
    打新日期: "2020/9/7",
    记息天数: 6,
    中签定价: 8.9,
    上市日期: "2020/9/18",
    list: [
      记录("华泰", 50, 1, 0.9, 0.038, 0),
      记录("富途", 100, 1, 0.9, 0.0398, 0),
      记录("华赢", 70, 1, 0.9, 0.0398, 0),
      记录("易昇", 50, 1, 0.9, 0.0398, 0),
      记录("盈路", 30, 1, 0.9, 0.05, 0),
      记录("佳兆业", 20, 1, 0.9, 0.0398, 0),
      记录("辉立", 2, 1, 1, 0.0298, 0, undefined, undefined, 0),
      记录("艾德", 1, 1, 0.9, 0.035, 0),
    ],
  },
  {
    name: "乐享互动",
    每手股数: 1000,
    上限招股价: 3.21,
    打新日期: "2020/9/10",
    记息天数: 7,
    中签定价: 2.88,
    上市日期: "2020/9/23",
    list: [
      记录("华泰", 300, 1, 0.95, 0.038, 1, 2.84, "2020/9/23"),
      记录("老虎", 100, 1, 0.95, 0.0403, 0),
      记录("辉立", 300, 1, 0.95, 0.0298, 1, 2.85, "2020/9/22"),
      记录("富昌", 15, 1, 1, 0.024, 0, undefined, undefined, 58),
    ],
  },
  {
    name: "明源云",
    每手股数: 1000,
    上限招股价: 16.5,
    打新日期: "2020/9/15",
    记息天数: 6,
    中签定价: 16.5,
    上市日期: "2020/9/25",
    list: [
      记录("华泰", 40, 1, 0.95, 0.038, 0),
      记录("老虎", 20, 1, 0.933, 0.045, 0),
      记录("辉立", 1, 1, 1, 0.0298, 0, undefined, undefined, 38),
      记录("富昌", 1, 1, 1, 0.024, 0, undefined, undefined, 38),
      记录("富途", 1, 1, 0.9, 0.038, 0),
      记录("尊嘉", 1, 1, 0.9, 0.038, 1, 23, "2020/9/24"),
      记录("艾德", 1, 1, 0.9, 0.038, 0),
      记录("华盛通", 1, 1, 0.9, 0.038, 0),
      记录("友信", 1, 1, 0.8, 0.038, 0),
      记录("长桥", 1, 1, 0.8, 0.038, 0),
    ],
  },
  {
    name: "再鼎医药-SB",
    每手股数: 50,
    上限招股价: 648,
    打新日期: "2020/9/22",
    记息天数: 3,
    中签定价: 562,
    上市日期: "2020/9/28",
    list: [记录("富昌", 1, 1, 1, 0.024, 0, undefined, undefined, 38)],
  },
  {
    name: "东软教育",
    每手股数: 800,
    上限招股价: 6.22,
    打新日期: "2020/9/17",
    记息天数: 6,
    中签定价: 6.22,
    上市日期: "2020/9/29",
    list: [
      记录("富途", 40, 1, 0.9, 0.038, 1, 7.6, "2020/9/28"),
      记录("辉立", 9, 1, 1, 0.0288, 1, undefined, undefined, 38),
      记录("富昌", 1, 1, 1, 0.024, 0, undefined, undefined, 38),
    ],
  },
  {
    name: "中通快递-SW",
    每手股数: 50,
    上限招股价: 268,
    打新日期: "2020/9/22",
    记息天数: 6,
    中签定价: 218,
    上市日期: "2020/9/29",
    list: [
      记录("富途", 1, 1, 0.9, 0.038, 1, 226.2, "2020/9/30"),
      记录("辉立", 3, 1, 1, 0.0288, 1, 235.2, "2020/9/28", 38),
      记录("富昌", 1, 1, 1, 0.024, 1, 233, "2020/9/28", 38),
    ],
  },
  {
    name: "宝尊电商-SW",
    每手股数: 100,
    上限招股价: 103.9,
    打新日期: "2020/9/23",
    记息天数: 5,
    中签定价: 82.9,
    上市日期: "2020/9/29",
    list: [记录("富昌", 1, 1, 1, 0.024, 1, 82.3, "2020/9/30", 38)],
  },
  {
    name: "嘉和生物-B",
    每手股数: 500,
    上限招股价: 24,
    打新日期: "2020/9/23",
    记息天数: 8,
    中签定价: 24,
    上市日期: "2020/10/7",
    list: [
      记录("富途", 14, 1, 0.9, 0.038, 0),
      记录("华泰", 12, 1, 0.9, 0.038, 1, 27.9, "2020/10/9"),
      记录("老虎", 40, 1, 0.933, 0.0403, 0),
      记录("华赢", 20, 1, 0.9, 0.038, 0),
      记录("辉立", 60, 1, 0.9, 0.0298, 0),
      记录("盈路", 1, 1, 0.9, 0.05, 0),
      记录("友信", 1, 1, 0.8, 0.038, 0),
      记录("长桥", 1, 1, 0.9, 0.0399, 0),
      记录("阿尔法", 1, 1, 0.9, 0.038, 0),
      记录("华盛通", 1, 1, 0.9, 0.038, 0),
      记录("尊嘉", 1, 1, 0.9, 0.038, 0),
      记录("艾德", 1, 1, 0.9, 0.038, 0),
      记录("佳兆业", 1, 1, 0.9, 0.045, 0),
      记录("富昌", 4, 1, 1, 0.024, 0, undefined, undefined, 58),
    ],
  },
  {
    name: "云顶新耀-B",
    每手股数: 500,
    上限招股价: 55,
    打新日期: "2020/9/25",
    记息天数: 8,
    中签定价: 0,
    上市日期: "2020/10/9",
    list: [
      记录("富途", 1, 1, 0.9, 0.038, 0),
      记录("华泰", 30, 1, 0.9, 0.038, 0),
      记录("辉立", 1, 1, 1, 0.0288, 0, undefined, undefined, 38),
      记录("华盛通", 1, 1, 0.9, 0.038, 0),
      记录("盈路", 1, 1, 0.75, 0.05, 0),
      记录("长桥", 1, 1, 0.8, 0.038, 0),
    ],
  },
  {
    name: "卓越商企服务",
    每手股数: 1000,
    上限招股价: 10.68,
    打新日期: "2020/10/7",
    记息天数: 4,
    中签定价: 0,
    上市日期: "2020/10/19",
    list: [
      记录("华泰", 25, 1, 0.9, 0.038),
      记录("辉立", 60, 1, 0.9, 0.0288),
      记录("富昌", 2, 1, 1, 0.024, undefined, undefined, undefined, 38),
      记录("友信", 1, 1, 0.8, 0.038),
    ],
  },
  {
    name: "第一服务",
    每手股数: 2500,
    上限招股价: 13.8,
    打新日期: "2020/10/12",
    记息天数: 6,
    中签定价: 0,
    上市日期: "2020/10/22",
    list: [记录("辉立", 8, 1, 1, 0.0288, undefined, undefined, undefined, 38)],
  },
  {
    name: "沧港铁路",
    每手股数: 4000,
    上限招股价: 13.8,
    打新日期: "2020/10/12",
    记息天数: 7,
    中签定价: 0,
    上市日期: "2020/10/23",
    list: [记录("辉立", 2, 1, 1, 0.0288, undefined, undefined, undefined, 0)],
  },
  {
    name: "先声医药",
    每手股数: 1000,
    上限招股价: 13.8,
    打新日期: "2020/10/13",
    记息天数: 6,
    中签定价: 0,
    上市日期: "2020/10/23",
    list: [
      // 记录("华泰", 25, 1, 0.9, 0.038),
      // 记录("辉立", 60, 1, 0.9, 0.0288),
      // 记录("富昌", 2, 1, 1, 0.024, undefined, undefined, undefined, 38),
      // 记录("友信", 1, 1, 0.8, 0.038),
    ],
  },

  // {
  //   name: "蚂蚁集团",
  //   每手股数: 100,
  //   上限招股价: 100,
  //   打新日期: "2020/9/18",
  //   记息天数: 7,
  //   中签定价: 0,
  //   list: [],
  // },
  // {
  //   name: "蓝月亮",
  //   每手股数: 500,
  //   上限招股价: 10000,
  //   打新日期: "2020/7/28",
  //   记息天数: 7,
  //   中签定价: 0,
  //   list: [],
  // },
];
data.reverse();

console.log(data);
export default data;
