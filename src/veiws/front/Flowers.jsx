import { flowerData } from '../../data/flowerData'
import { useEffect, useState } from 'react'

const Flowers = () => {
  const [month, setMonth] = useState([])
  useEffect(() => {

  })
  const seasonalCard = [
    { seasonal: '春季', month: '3~5月', id: [3, 4, 5] },
    { seasonal: '夏季', month: '6~8月', id: [6, 7, 8] },
    { seasonal: '秋季', month: '9~11月', id: [9, 10, 11] },
    { seasonal: '冬季', month: '12~2月', id: [12, 1, 2] },
    { seasonal: '全年', month: '1~12月', id: Array.from({ length: 12 }, (_, i) => i + 1) },
  ]

  const handleSeasonToggle = (index) => {
    const targetIds = seasonalCard[index].id
    setMonth((pre) => {
      const isCurrentSeason = pre.includes(targetIds[0])
      if (isCurrentSeason) {
        return []
      }
      else {
        return targetIds
      }
    })
  }
  return (
    <>
      <div style={{ height: '70px' }}></div>
      <div className="container mt-4">
        <div className="seasonal-list">
          {seasonalCard.map((item, index) => (
            <div className="seasonal-item" key={index} onClick={() => { handleSeasonToggle(index) }}>
              <div className="seasonal-card text-center">
                <h4>{item.seasonal}</h4>
                <h6>{item.month}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row g-5">
          {flowerData.filter((flower) => {
            if (month.length === 0) return true
            return flower.season.some(m => month.includes(m))
          })
            .map((item) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                  <div className="flowerCard">
                    <div className="card h-100">
                      <img src={item.image_url} className="card-img-top" alt={item.title} />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">{item.title}</h5>
                        <p className="card-text">...</p>
                        <a href="#" className="btn btn-primary-500 text-white">查看詳情</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Flowers
