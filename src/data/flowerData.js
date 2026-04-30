import beauty001 from '../assets/beauty-001.webp'
import musk002 from '../assets/musk-002.webp'
import tung001 from '../assets/tung-001.webp'
import tung002 from '../assets/tung-002.webp'
import trumpet001 from '../assets/trumpet-001.webp'
import trumpet002 from '../assets/trumpet-002.webp'
import kapok001 from '../assets/kapok-001.webp'
import gold002 from '../assets/gold-002.webp'
import cypress002 from '../assets/cypress-002.webp'
import cypress003 from '../assets/cypress-003.webp'
import cypress004 from '../assets/cypress-004.webp'
import maple001 from '../assets/maple-001.webp'
import tulip001 from '../assets/tulip-001.webp'
import phoenix001 from '../assets/phoenix-001.webp'
import phoenix002 from '../assets/phoenix-002.webp'
import lotus001 from '../assets/lotus-001.webp'
import lotus002 from '../assets/lotus-002.webp'
import lily001 from '../assets/lily-001.webp'
import lily002 from '../assets/lily-002.webp'
import lily003 from '../assets/lily-003.webp'
import grass002 from '../assets/grass-002.webp'

export const flowerData = [
  {
    id: 'sakura-001',
    title: '梅峰古道',
    flower_name: '櫻花',
    season: [1, 2, 3],
    location: { city: '台南市', area: '楠西區', lat: 23.189, lng: 120.523 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAACiiPRX86Aedk%2fNEIdNeYjruNboZ5HKPikuiAaMxvJLwQAAAAAOgAAAAAIAACAAAABCf0ErGoYhR56PIEWkZPH3p4EwmcI1Sbfpzu9kQh8cKzAAAAAHf27UuWIsZnK2wo1Ln2WGdW0YHi6ad4hbiaUbvhCRAr8bnnSmehAW2nHAiOB8JJ9AAAAAqRgCwG1XWyLvTsesLv%2bdN7t42%2fe%2bB5flGp8gR4ddT4RBhMuh5ReuDztx%2fx4OT1ICSMTLWP8ch9nagm4mKz2Gwg%3d%3d',
  },
  {
    id: 'sakura-002',
    title: '武陵農場',
    flower_name: '櫻花',
    season: [1, 2, 3],
    location: { city: '台中市', area: '和平區', lat: 24.350, lng: 121.310 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAAAWO%2ffWBsZv9gnScJfCZ2UbyKJklbMtx0N1QhTQs6NBSAAAAAAOgAAAAAIAACAAAABnEtBGarVHIcx6m27eBEJ3u%2fBxjBowN5MptONACDzXhWAAAADGUNi03bUirK61LAWWzwSnUKF%2fpqZ%2fS9Bvkdp2hVw8Gf1U2tnt%2fEyAcHt%2b995SE%2fQoXnz4GobW%2f29c0dSIwru3y2onJKC0BU9op7MkpE9jExVojMxmPd7QGAIssRYkxItAAAAA9mwrs0aMLZMVWsjyB8srhXLEkL8%2fMfGYu70LFlPkez0z7z7q7GSOLW9W4uClfrEupqN%2bMbSAEWHHI0Zz4HWadA%3d%3d',
  },
  {
    id: 'sakura-003',
    title: '九族文化村',
    flower_name: '櫻花',
    season: [1, 2, 3],
    location: { city: '南投縣', area: '魚池鄉', lat: 23.870, lng: 120.945 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAAAjQz4v4C3Fp7DXxY%2f93UoZZSf9a47Q3HqPAblmdBu9%2bQAAAAAOgAAAAAIAACAAAAD%2bsz8uZEfXBrAwF6fHJ5X%2bXOWDQbTfexVIBI6NtdAcIzAAAACQvn%2fMdBUXPseI2kYxhxmsl4xtDNKefDursKBq5sLqnPITGBAybcd9m9NbHz%2b4rdpAAAAAdEX6Yw7e37lwB7NvmzC%2bb5VZZYvAWvdScU7yiBMKUJ%2ftrZUozGTbSs%2b12syQ0iBE6HZdHKi2l3fHvOOPjNCvqw%3d%3d',
  },
  {
    id: 'sakura-004',
    title: '三生步道',
    flower_name: '櫻花',
    season: [1, 2, 3],
    location: { city: '新北市', area: '三芝區', lat: 25.251, lng: 121.501 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAAB2XagETbie73MgehFDd%2bbx8rpdo4oFJfBZkEY5A4VdaAAAAAAOgAAAAAIAACAAAADBQav49M2vtHTvRGeZCIMdsRmEW3dfYKSOSq%2ftZecFBTAAAAB8u9ixSEhVTDnLAKBRcnKEuFBi%2fR6obkHvDocb0DqmfALtN2lnbkBqJaWmykMyOLVAAAAANfeyakC9PEmq3ZicsiMWBMhuMStn6SHKOQvTqpDGACoJl%2bhV5QvHHa7NCMAcf7%2bz7bMnOjLVK6NLfiZaVhfKaw%3d%3d',
  },
  {
    id: 'musk-001',
    title: '飄香麝香木園區',
    flower_name: '麝香木',
    season: [2, 3, 4],
    location: { city: '台南市', area: '山上區', lat: 23.048, lng: 120.354 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAACjzLsli98ZB0TSOlufLISAoUsjbMrr%2fTB2dFb6VzLdngAAAAAOgAAAAAIAACAAAACH8MHx4%2f8WM2maLUlPloJ6A15eEJNyEC0VIsgC1ejftDAAAAAYTir%2b4whYCnjaImFaATG1wriDC85T6bQ1m9TH2V2tlSUAiLtg7pRjMVbvWfUJuGBAAAAAcKt7zeTThZDh6Q3nhOjn43tiDtNhW7GtghqfyioRbrAx0aYBrDBHheDkNZyU0TNXdy0wpgxE3rwk2qOyv%2bEOgQ%3d%3d',
  },
  {
    id: 'musk-002',
    title: '瑰蜜甜心玫瑰園',
    flower_name: '麝香木',
    season: [2, 3, 4],
    location: { city: '南投縣', area: '中寮鄉', lat: 23.882, lng: 120.781 },
    image_url: musk002,
  },

  {
    id: 'plum-001',
    title: '梅嶺風景區',
    flower_name: '梅花',
    season: [12, 1],
    location: { city: '台南市', area: '楠西區', lat: 23.183, lng: 120.561 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAAAZUksR%2bitbw%2fiSKCVJhFTIA4r8F6rngBMXQgb4mxKWzgAAAAAOgAAAAAIAACAAAAB5xDYNiM1z1anmVyO7s7613H4tRMSJ0L4VIuUzQeGy%2bTAAAADWFprPY6NNz3Ov0BE8CwLJUHMyDCvV%2b7Xd4sOnJxdP2DAVCY6mv20SDYEXmotff7lAAAAA1H0kPXp5oLnHFJDpOlMFbI9dyZ56x5CuAXhe7%2b3EUT08s9VLldzKVIvF%2fIndiH6wvq5FM3d8NAWoaBYaOqHR4A%3d%3d',
  },

  {
    id: 'glory-001',
    title: '玥園 思親步道',
    flower_name: '花旗木',
    season: [3, 4],
    location: { city: '台南市', area: '西港區', lat: 23.123, lng: 120.201 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAAAiuscO8JbrGg8sebMD9X9wrH8Rx%2fWCI93uR%2fhbczfx3QAAAAAOgAAAAAIAACAAAAD7LdLabe%2bChrmN2uw1xH76eqcV0sGvDjLVFn8EmEw69zAAAACMEyFKgj7coxZVmyxYR63L6Fu8v6b5aow%2bCYjbjYd9%2bqkZDLhnrtUWMwNcTIgLlstAAAAAUxWJ7pdEjKk9jjQs%2ffxHFRiuFEyMnS7wcTgfFCoZZcxAp9bBxf6%2bJgNoMZ5M53HYP3xXnuhJTPJ90ls2I%2bue4A%3d%3d',
  },
  {
    id: 'glory-002',
    title: '二水花旗木',
    flower_name: '花旗木',
    season: [3, 4],
    location: { city: '彰化縣', area: '二水鄉', lat: 23.812, lng: 120.612 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAABHhphrTfAbTKRb6olUJw8JL%2byr3DiKeNdt7fBDMcJ%2bJwAAAAAOgAAAAAIAACAAAACn64p3tEuFeai9Dduji%2bQRGjwXKLIdLeMbgjklTAiwNTAAAACMEf0kqaZw5pi%2fGjDQXL%2fXXcXNn868Uv%2bqFXd91%2bedSHqsjW8MR2D0KD3VdMW5x2dAAAAAPc9B3YSAHfDNjwEBHC61A8MFfOzsp7asEr6Rksju5%2fma4%2bmve%2bsrm7pYe86wrtjmGcE27ywoixuRFZ1lk1XkOg%3d%3d',
  },
  {
    id: 'glory-003',
    title: '天台山維多莉亞園區',
    flower_name: '花旗木',
    season: [3, 4],
    location: { city: '高雄市', area: '六龜區', lat: 22.955, lng: 120.627 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAACaunv7uu0knuQCmPXLWblURAl22LGA4sHVAtQtFn7zhQAAAAAOgAAAAAIAACAAAACTP6WBtFTOs6K3ldiGModvmXQ5IF00Se9870lwlo9aozAAAACGeP2SC%2bZSU%2bOsdU5OEtZfEsmAS%2bWhTxw6MAclRva2LxVqtQd2qFNnlUzRy7vwesBAAAAA801K6oY%2b5cvvY8m11vGFu5o0dPoBNZv97Js9HayyMg13Gf3EunJRAdQ9c0Tpfy3BQeCHi3Y3kviktSCzqcHW8A%3d%3d',
  },

  {
    id: 'tung-001',
    title: '神棹仙境桐花步道',
    flower_name: '油桐花',
    season: [4, 5],
    location: { city: '苗栗縣', area: '三灣鄉', lat: 24.639, lng: 120.975 },
    image_url: tung001,
  },
  {
    id: 'tung-002',
    title: '水流東桐花步道',
    flower_name: '油桐花',
    season: [4, 5],
    location: { city: '台中市', area: '外埔區', lat: 24.341, lng: 120.672 },
    image_url: tung002,
  },

  {
    id: 'trumpet-001',
    title: '廍子公園',
    flower_name: '黃花風鈴木',
    season: [2, 3],
    location: { city: '台中市', area: '北屯區', lat: 24.164, lng: 120.732 },
    image_url: trumpet001,
  },
  {
    id: 'trumpet-002',
    title: '八掌溪堤防',
    flower_name: '黃花風鈴木',
    season: [2, 3],
    location: { city: '嘉義市', area: '東區', lat: 23.461, lng: 120.468 },
    image_url: trumpet002,
  },

  {
    id: 'hydrangea-001',
    title: '武陵農場',
    flower_name: '繡球花',
    season: [5, 6, 7],
    location: { city: '台中市', area: '和平區', lat: 24.350, lng: 121.310 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAABN4L0qPS%2bpERIM7Etnc76zPSFPHAKNOYatVZ6QeAN9EgAAAAAOgAAAAAIAACAAAAAapg6fTgMHxWrizYP0ClAIBfoC6Cl57VhVkVJr1MNnSzAAAADzvzriNZJMap9Mt3VQGIbaJf%2bNITJ7AkcdVtfncZar0JQ2f6DAIapFzNSBMuPH%2fVNAAAAAIOQyYihhz5%2f87T%2fGl01FqTq%2bvBsNdik6eyj3hg9RHUoVkUEn5ygI3UDAw8SXmIt%2bxsyiUCXbDJo0vbJJ0XED9w%3d%3d',
  },
  {
    id: 'hydrangea-002',
    title: '陽明山竹子湖',
    flower_name: '繡球花',
    season: [5, 6, 7],
    location: { city: '台北市', area: '北投區', lat: 25.172, lng: 121.536 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAABa6OYauqRq7rE6r5%2b2Xhk%2f0MvXXF%2bYio8XbYri568kLQAAAAAOgAAAAAIAACAAAABdmmmYZDGjXkJQWvjAe%2fjO%2bjK1rjA19akovlpQw1TAvzAAAAA4DVZRUGSayChXo4LFM5N2VTuIXf1TBLPlruJpQW4TCbpksTDY2owb13SmiNwWiX5AAAAAo5pjgDewkt3uaDv3nQW%2fs5jRE%2fvWw2zeHQhA55Mv2pnaHZJgwM4bDTACdz2bSt7g4JZIjBUdKYONuPwvGZHUJg%3d%3d',
  },

  {
    id: 'kapok-001',
    title: '白河木棉花道',
    flower_name: '木棉花',
    season: [3, 4],
    location: { city: '台南市', area: '白河區', lat: 23.377, lng: 120.409 },
    image_url: kapok001,
  },
  {
    id: 'kapok-002',
    title: '林初埤木棉花',
    flower_name: '木棉花',
    season: [3, 4],
    location: { city: '台南市', area: '白河區', lat: 23.378, lng: 120.410 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAACwUqNbcWKsYB1gwby7EE%2bi1aYnOHkwrbjEbAOLCyRWoQAAAAAOgAAAAAIAACAAAAAWesU1HOm26mQG6j6qjOJ4saU7xXjWzGuma4w2xappczAAAAAUs%2bA4G0zUx7n6HdlmUPP0KZ6OGGSL0z7MmJzfv3ddZi79vibrAFKuYLjK2lAMQA5AAAAA%2bMtO3eoQ6VjPdzsM3cEbPPtQ68WZmbr%2fye7U8H7Q9YDZhOHgSb7J99Jat2pNy5F8dIwoBkdgqq8NFWMP0SLSIQ%3d%3d',
  },

  {
    id: 'miscanthus-001',
    title: '草嶺古道',
    flower_name: '白背芒',
    season: [11, 12],
    location: { city: '宜蘭縣', area: '頭城鎮', lat: 24.985, lng: 121.921 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAAAGDTaJ5KQsB%2fKxYUDNyAkZ7YWVzY6T0dXSZMldoZ7adwAAAAAOgAAAAAIAACAAAAAGY5JIxkbqPoxKUZihKAR2B4J2WIV0dPG2BAZm%2fV3oomAAAABRIfQi2y974XF2Z730QqHF9p5VjpEYS4iMEdFRFzlROWhAzooFCD0BsdVEAyol4CBXsHoF%2bFdOcftS8pHE%2bCIgGt4FXus6Ck3OKVH92VZ9FbMO6in7AMFYGzhFXxoBp%2fVAAAAANIIE2mKn7KHpQLhAUrdkaPywT%2fKlzHOTt2HYZkYH%2bR8ZccW5C2Z9Hc5YMIxaS38fnoye7g2MRXkYftZOiGLcTw%3d%3d',
  },

  {
    id: 'gold-001',
    title: '榮民之家',
    flower_name: '阿勃勒',
    season: [5, 6],
    location: { city: '屏東縣', area: '內埔鄉', lat: 22.651, lng: 120.612 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAAB%2fxoW%2bPdaOPAItOk3t%2bnPKe%2fD8hFEMhlZkx74oP4fESgAAAAAOgAAAAAIAACAAAACnzVbbekAlyXORLMAMqF97P%2bQ9Fx1wTKqdhbItt0yxhTAAAACDRDTkWIOfUAwZ8oqiX4JuNxFIrVsfLSETzZkTFdr%2bbhzzgvMSHr%2fzvenaEUGCW%2b5AAAAAYO8jcsfE2Psk63Dp6R2REIPz9DEPNRw5TXHrIcMFAX7IslKtzMHXyIzo9LW7bwIaXDDi0wC9RtD%2bgYy%2bpzI0Qw%3d%3d',
  },
  {
    id: 'gold-002',
    title: '中興大學綠園道',
    flower_name: '阿勃勒',
    season: [5, 6],
    location: { city: '台中市', area: '南區', lat: 24.121, lng: 120.675 },
    image_url: gold002,
  },
  {
    id: 'cypress-004',
    title: '月眉人工濕地公園',
    flower_name: '落羽松',
    season: [1, 2],
    location: { city: '桃園市', area: '大溪區', lat: 24.891, lng: 121.295 },
    image_url: cypress004,
  },
  {
    id: 'cypress-002',
    title: '泰安落羽松秘境',
    flower_name: '落羽松',
    season: [1, 2],
    location: { city: '台中市', area: '后里區', lat: 24.312, lng: 120.736 },
    image_url: cypress002,
  },
  {
    id: 'cypress-003',
    title: '麗寶落羽松大道',
    flower_name: '落羽松',
    season: [1, 2],
    location: { city: '台中市', area: '后里區', lat: 24.324, lng: 120.701 },
    image_url: cypress003,
  },
  {
    id: 'cypress-001',
    title: '貢寮環保公園',
    flower_name: '落羽松',
    season: [1, 2],
    location: { city: '新北市', area: '貢寮區', lat: 25.018, lng: 121.912 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAADRPdBbbOySPDEPliyGXv34oQrPkMEKwNHBbJP8usa%2bXgAAAAAOgAAAAAIAACAAAADWFgbNuV4dir81i41qxGvUGZSj3GxUTFkMxm%2bLK7AVEzAAAAAIsnR3xaxJz1VoKvB6UiRxd2Idn7gV2JpgzSfBxrzc6EQvfXRLif6hxyokUjfxsAJAAAAAv5fJZiX6i7DE%2f%2bjKucqtYn8lT3ex84jlTOxcJIr4cWgX0Dw8KWgAQPpGmQxe6fjoXyVQxErJDQOLvG68JBgohQ%3d%3d',
  },
  {
    id: 'cypress-005',
    title: '六甲落羽松',
    flower_name: '落羽松',
    season: [1, 2],
    location: { city: '台南市', area: '六甲區', lat: 23.235, lng: 120.352 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAACF7L%2f7ixl73%2fUHN3PTVhSK1lYqxIwD8DcLMpaznEQ%2bTwAAAAAOgAAAAAIAACAAAAAcOGj0vIioYkYEHWPxmm6255V%2ftU%2b6gWLApwDQbWJEFjAAAAAM5vDIz6RXuOX6OiUBsaXQMTvsmOAtO8iBJkmR%2fN%2bppm%2b%2blxnfyDHxfE4FMkbCP2tAAAAA8iiRiRH%2fzQY18Jgo6%2f0TjKwsEEAij1wY8SKLM3hGPxCBKm0nZTAwfseYsafx1XnQWWkHTLNuHLSvwYwhcAc%2bdQ%3d%3d',
  },

  {
    id: 'sunflower-001',
    title: '向陽農場',
    flower_name: '向日葵',
    season: [5, 6, 7, 8, 9, 10, 12, 1, 2],
    location: { city: '桃園市', area: '觀音區', lat: 25.025, lng: 121.045 },
    image_url: 'https://images.pexels.com/photos/18540028/pexels-photo-18540028.jpeg',
  },

  {
    id: 'maple-001',
    title: '雪霸國家公園',
    flower_name: '楓樹',
    season: [11, 12, 1],
    location: { city: '宜蘭縣', area: '大同鄉', lat: 24.385, lng: 121.304 },
    image_url: maple001,
  },
  {
    id: 'maple-002',
    title: '武陵農場',
    flower_name: '楓樹',
    season: [11, 12, 1],
    location: { city: '台中市', area: '和平區', lat: 24.350, lng: 121.310 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAADG21BZ7O7S%2b2KHvWpstJzUmg82fh7xwsOoUvvvft%2fVwQAAAAAOgAAAAAIAACAAAAAIykL4oWKk0pes7%2fhKhCekisuqFPAhViWkyDPEVq0XszAAAABKRea47ZgAHVvbQMQpXXgVEmSbIZqN6PmUG7YYDuuYnBSFDLI3So9W%2bCVKCwRbdkBAAAAApgcHpql6p%2fPafRYHuL6%2fSlxYD%2bSOUelrVF3zpfwHu6Syy9UbXhdzy%2bPF3rUYbsPyfxmRfwLV6%2bPoT7mVCbOuIA%3d%3d',
  },

  {
    id: 'tulip-001',
    title: '中社觀光花市',
    flower_name: '鬱金香',
    season: [1, 2],
    location: { city: '台中市', area: '后里區', lat: 24.331, lng: 120.728 },
    image_url: tulip001,
  },
  {
    id: 'tulip-002',
    title: '杉林溪森林園區',
    flower_name: '鬱金香',
    season: [1, 2],
    location: { city: '南投縣', area: '竹山鎮', lat: 23.637, lng: 120.796 },
    image_url: 'https://images.pexels.com/photos/103573/pexels-photo-103573.jpeg',
  },

  {
    id: 'phoenix-001',
    title: '八卦山天空步道',
    flower_name: '鳳凰花',
    season: [5, 6, 7],
    location: { city: '彰化縣', area: '彰化市', lat: 24.079, lng: 120.548 },
    image_url: phoenix001,
  },
  {
    id: 'phoenix-002',
    title: '梅山公園',
    flower_name: '鳳凰花',
    season: [5, 6, 7],
    location: { city: '嘉義縣', area: '梅山鄉', lat: 23.585, lng: 120.555 },
    image_url: phoenix002,
  },

  {
    id: 'lavender-001',
    title: '葛瑞絲香草田',
    flower_name: '薰衣草',
    season: [11, 12, 1, 2, 3, 4],
    location: { city: '苗栗縣', area: '頭屋鄉', lat: 24.582, lng: 120.871 },
    image_url: 'https://images.pexels.com/photos/4656006/pexels-photo-4656006.jpeg',
  },
  {
    id: 'lavender-002',
    title: '薰衣草森林',
    flower_name: '薰衣草',
    season: [11, 12, 1, 2, 3, 4],
    location: { city: '台中市', area: '新社區', lat: 24.148, lng: 120.844 },
    image_url: 'https://images.pexels.com/photos/4242700/pexels-photo-4242700.jpeg',
  },

  {
    id: 'beauty-001',
    title: '北斗河濱公園',
    flower_name: '美人樹',
    season: [9, 10, 11],
    location: { city: '彰化縣', area: '北斗鎮', lat: 23.868, lng: 120.522 },
    image_url: beauty001,
  },

  {
    id: 'lotus-001',
    title: '中興新村',
    flower_name: '荷花',
    season: [6, 7, 8, 9],
    location: { city: '南投縣', area: '南投市', lat: 23.957, lng: 120.686 },
    image_url: lotus001,
  },
  {
    id: 'lotus-002',
    title: '白河蓮花公園',
    flower_name: '荷花',
    season: [6, 7, 8, 9],
    location: { city: '台南市', area: '白河區', lat: 23.351, lng: 120.415 },
    image_url: lotus002,
  },

  {
    id: 'lily-001',
    title: '六十石山',
    flower_name: '金針花',
    season: [8, 9],
    location: { city: '花蓮縣', area: '富里鄉', lat: 23.220, lng: 121.314 },
    image_url: lily001,
  },
  {
    id: 'lily-002',
    title: '赤科山',
    flower_name: '金針花',
    season: [8, 9],
    location: { city: '花蓮縣', area: '玉里鎮', lat: 23.389, lng: 121.389 },
    image_url: lily002,
  },
  {
    id: 'lily-003',
    title: '太麻里金針山',
    flower_name: '金針花',
    season: [8, 9],
    location: { city: '台東縣', area: '太麻里鄉', lat: 22.651, lng: 121.002 },
    image_url: lily003,
  },

  {
    id: 'grass-001',
    title: '大內橋堤防',
    flower_name: '甜根子草',
    season: [8, 9, 10],
    location: { city: '台南市', area: '大內區', lat: 23.116, lng: 120.355 },
    image_url: 'https://media.taiwan.net.tw/zh-tw/Portal/Media/EncryptedCoverImage?f=AQAAANCMnd8BFdERjHoAwE%2fCl%2bsBAAAAGTAmk4ub5k6P0R8EciaYDwAAAAACAAAAAAAQZgAAAAEAACAAAAAYYA3Tt7IuJP9LyCNrwRgpJmcPyTXlgkVPEwIJrE1SNwAAAAAOgAAAAAIAACAAAAAa80r3V8aS90mqpn%2fOVlyP2GP24iGSEHyfV4TZjx9rtDAAAADSCH3mg7o4xneCGi2CZ8HBYlyO8GftXRItgILQakXj3OP31saPZh4zrXHNVEp%2bFkJAAAAAsPLS47wZGu3Yp6crlvf4qZKyuBtESTS5RMmVxGvbxdHF3y6X4OntNf8B7bBewGh%2f7UCE0As2A8HlVI9B6N2QRg%3d%3d',
  },
  {
    id: 'grass-002',
    title: '嘉義八掌溪',
    flower_name: '甜根子草',
    season: [8, 9, 10],
    location: { city: '嘉義市', area: '東區', lat: 23.456, lng: 120.472 },
    image_url: grass002,
  },
]
