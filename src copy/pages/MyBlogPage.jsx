
import './Styles/MyBlogPage.css'

const MyBlogPage = () => {
  return (
    <article className="blog__container">
      <section className="blog__header">
        <div className='blog__header-title'> 
          <span className='blog__title-01'>My Blog</span>
          <span className='blog__title-02'>Blog</span>
        </div>
      </section>
      <section className="blog__body">
          <a href='https://sites.google.com/view/fizahome/home' target='_blank' className='blog__card'>
            <div className='card-header'>
              <span className='header__info-01'></span>
            </div>
            <div className='card__body'>
              <div className='card__particular'>
                <span className='carr__particular-span'>June 21, 2021 ADMIN</span>
              </div>
              <div className='card__title'>
                <h2>The Social Responsability in the university</h2> 
              </div>
              <div className='card__textbite'>
                <p>
                The University of Manchester has recently launched a new social responsibility and civic engagement 
                </p>
              </div>
            </div>
          </a>
          <a href='https://sites.google.com/view/fizahome/home' target='_blank' className='blog__card'>
            <div className='card-header'>
              <span className='header__info-02'></span>
            </div>
            <div className='card__body'>
              <div className='card__particular'>
                <span className='carr__particular-span'>June 21, 2021 ADMIN</span>
              </div>
              <div className='card__title'>
                <h2>Unlock Explosive Growth with This Outreach Specialist's Proven Tactics!</h2> 
              </div>
              <div className='card__textbite'>
                <p>
                Discover the secret tool top marketers use to skyrocket their rankings overnight!
                </p>
              </div>
            </div>
          </a>
          <a href='https://sites.google.com/view/fizahome/home' target='_blank' className='blog__card'>
            <div className='card-header'>
              <span className='header__info-03'></span>
            </div>
            <div className='card__body'>
              <div className='card__particular'>
                <span className='carr__particular-span'>June 21, 2021 ADMIN</span>
              </div>
              <div className='card__title'>
                <h2>Revolutionize Your SEO Strategy: Meet the Ultimate Backlink Builder!</h2> 
              </div>
              <div className='card__textbite'>
                <p>
                Discover the secret tool top marketers use to skyrocket their rankings overnight!
                </p>
              </div>
            </div>
          </a>
      </section>
    </article>
  )
}

export default MyBlogPage