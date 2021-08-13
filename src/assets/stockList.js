/**
 * 记录主账户打新历史
 * @param 券商
 * @param 打新手数
 * @param 打新类型
 * @param 融资倍数
 * @param 融资利率
 * @param 中签数
 * @param 出售价格
 * @param 出售日期
 * @param 打新手续费
 * @return {{融资倍数: (number), 账户: string, 打新手续费, 打新类型: (string), 融资比例: number, 券商, 出售价格, 中签数, 打新手数: number, 出售日期, 融资利率: number}}
 */
const 记录1 = (
  券商,
  打新手数 = 1,
  打新类型 = 1,
  融资倍数 = 10,
  融资利率 = 0.0398,
  中签数,
  出售价格,
  出售日期,
  打新手续费
) => {
  // 现金打新默认0倍融资
  融资倍数 = 打新类型 ? 融资倍数 : 0;

  return {
    券商,
    打新类型: 打新类型 ? "融资打新" : "现金打新",
    打新手数,
    融资比例: 融资倍数 > 1 ? 1 - 1 / 融资倍数 : 融资倍数 / 1,
    融资倍数,
    融资利率,
    中签数,
    出售价格,
    出售日期,
    打新手续费,
    账户: '主账户'
  };
};

let data = [
  {
    name: "心玮医疗-B",
    list: [
      记录1("建投国际", 1, 0, 0, 0, 0),
      记录1("尊嘉", 1, 0, 0, 0, 0),
      记录1("盈立", 1, 0, 0, 0, 0),
      记录1("辉立", 1, 0, 0, 0, 0),
    ],
  },
  {
    name: "先瑞达医疗-B",
    list: [
      记录1("辉立", 5, 1, 20.06, 0.01, 0),
      记录1("致富", 8, 1, 20.19, 0.0298, 0)
    ],
  },
];
data.reverse();

// console.log(data);
export default data;
