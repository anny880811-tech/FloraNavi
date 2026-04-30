import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'
import { displaySections } from '../../data/displaySections'
import { flowerData } from '../../data/flowerData'
import { bannerData } from '../../data/bannerData'

const Home = () => {
  const currentMonth = new Date().getMonth() + 1
  const seenNames = new Set()
  const currentFlower = flowerData.filter((item) => {
    const currentSeason = item.season.includes(currentMonth)
    const seenFlower = seenNames.has(item.flower_name)
    if (currentSeason && !seenFlower) {
      seenNames.add(item.flower_name)
      return true
    }
    return false
  })
  // const seeNames = new Set()
  // const currentFlower = flowerData.filter(item => item.season.includes(5) && !seeNames.has(item.flower_name) && seeNames.add(item.flower_name))

  const seasonBanner = bannerData.filter(item => item.season.includes(currentMonth))

  return (
    <>
      {seasonBanner.map((item) => {
        return (
          <section className="banner-section" key={item.id}>
            <div className="banner-img">
              <Swiper
                effect="fade"
                loop={item.imageUrl.length > 1}
                autoplay={{ delay: 3500 }}
                modules={[EffectFade, Autoplay]}
                className="h-100"
              >
                {item.imageUrl.map((img, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={img} alt="Banner" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 2s ease-in-out' }} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div className="banner-custom" style={{ zIndex: 10 }}>
              <h1 className="display-4 fw-bold">{item.title}</h1>
              <p className="fs-4">{item.subtitle}</p>
              <div className="d-flex search-bar-group">
                <input
                  type="text"
                  className="form-control input-custom"
                  placeholder="搜尋花卉關鍵字..."
                />
                <button className="btn-search text-nowrap" type="button">
                  {`前往探索 `}
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </section>
        )
      })}
      <div>
        <div className="container mt-5 card-custom">
          <h1 className="fw-bold mb-5">最佳打卡推薦</h1>
          {displaySections.map((item, index) => {
            return (
              <div className={`row align-items-center ${index % 2 === 1 ? 'flex-md-row-reverse' : ''}`} key={item.content}>
                <div className="col-md-6">
                  <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow mb-5">
                    <img
                      src={item.img}
                      className="object-fit-cover"
                      alt="花卉圖片"
                    />
                  </div>
                </div>
                <div className="col-md-6 ps-md-5">
                  <div>
                    <h3 className="fw-bold text-primary-500">{item.content}</h3>
                    <p className="fs-5 text-muted">{item.description}</p>
                    <div className="mt-3">
                      {item.tags.map((tag, index) => {
                        return (
                          <span className="badge rounded-pill bg-light text-dark border me-2" key={index}>{tag}</span>
                        )
                      })}
                    </div>
                    <button className="btn btn-outline-primary mt-4 px-4 mb-md-5 mb-5">{item.btnText}</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <section className="blooming-now container mt-5 mb-5">
        <h1 className="fw-bold mb-3 text-center">正在盛開</h1>
        <Swiper
          spaceBetween={30}
          effect="fade"
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiperHome"
        >
          {currentFlower.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item.image_url} className="swiperImg" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
    </>
  )
}

export default Home
