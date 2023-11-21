/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
 USE_PASSAGE: 'wechat-test',
 PROVINCE: '浙江',
    CITY: '绍兴',
 SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,
  },
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '145cdf19945e44741f43cf0eb22ace6c',
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
  },
  USERS: [
    {
      // 想要发送的人的名字
      name: '老婆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRR5i6XuskRaz7v4HANjJIcLIY_U',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ln88yfONLO-uE2WeXc5kGLczlYCkh3CTmlLp0M0PBJc',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-04',
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-11-11' },
      ],
    },
  ],
}

module.exports = USER_CONFIG

