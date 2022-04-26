import './sass/style.sass';
import iconPhone from './img/logo/phone-icon.png';
import log from './img/logo/log.png';
import logoShop from './img/logo/logo-porten.png';
import logoShopSecond from './img/logo/logo-porten-2.png';
import basket from './img/logo/basket.png';
import search from './img/logo/search.png';
import watch from './img/logo/watch.png';
import brand from './img/logo/brand.png';

function App() {
  return (
      <>
        <header>
          <div class="container">
              <div class="header">
                  <div class="header_info">
                      <div class="header_info_link">  
                          <img src={iconPhone} alt="phone_icon"/>
                          <span>8 (812) 123-45-67</span>
                      </div>
                      <div class="header_info_link">
                          <span>Работаем 7 дней в неделю</span>
                      </div>
                      <div class="header_info_link">
                          <span>9:00 — 18:00</span>
                      </div>
                  </div>
                  <div class="header_log">
                      <img src={log} alt="log"/>
                      <span>Войти / Регистрация</span>
                  </div>
              </div>
          </div>
        </header>

        <nav>
          <div class="nav">
              <div class="container">
                <div class="nav_block">
                    <div class="nav_block_logo">
                        <img src={logoShop} alt="logo"/>
                    </div>
                    <div class="nav_block_link">
                        <div class="block_item">
                            <span>Понравилось</span>
                        </div>
                        <div class="block_item">
                            <span>Личный кабинет</span>
                        </div>
                        <div class="block_item">
                            <span>Настройки</span>
                        </div>
                        <div class="block_item_link">
                            <img src={basket} alt="basket"/>
                        </div>
                        <div class="block_item_link">
                            <img src={search} alt="search"/>
                        </div>
                    </div>
                </div>
                <div class="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
              </div>
          </div>
        </nav>  

        <section>
          <div class="promo">
              <div class="container">
                  <div class="promo_block">

                    <div class="promo_block_item">
                        <img src={logoShopSecond} alt="logo porten"/>
                    </div>
                    
                    <div class="promo_block_text">
                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor<br/>
                            pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum<br/>
                            nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh<br/>
                            magna feugiat id nunc, dui nisl viverra.
                        </h5>
                    </div>
                  </div>
              </div>
          </div>
        </section> 

        <section>
            <div class="content">
                <div class="content_season">
                    
                    <div class="content_season_title">
                        <h2>СЕЗОН 2020/21</h2>
                        <div class="line"></div>
                    </div>
                    
                    <div class="content_season_list">
                        
                        <div class="item">
                            <div class="block">
                                <img src={watch} alt="logo"/>
                            </div>
                            <div class="text">
                                <span>Louis XVI ATHOS</span><br/>
                                <span>165 000 uah</span>
                            </div>
                        </div>

                        <div class="item">
                            <div class="block">
                                <img src={watch} alt="logo"/>
                            </div>
                            <div class="text">
                                <span>Louis XVI ATHOS</span><br/>
                                <span>165 000 uah</span>
                            </div>
                        </div>

                        <div class="item">
                            <div class="block">
                                <img src={watch} alt="logo"/>
                            </div>
                            <div class="text">
                                <span>Louis XVI ATHOS</span><br/>
                                <span>165 000 uah</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="content_catalog">
                    <div class="content_collection">
                        <div>
                            <span class="text_block">New Collection</span>
                        </div>
                        <div>
                            <button class="btn_block">Collection</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="features">
                <div class='features_block'></div>
                <div class="features_descr">
                    <div class="features_descr_title">
                        <h4>collection 2018</h4>
                        <div class="line"></div>
                    </div>
                    <div class="features_descr_text">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut
                            mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus 
                            vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis 
                            quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum 
                            dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean
                            praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra
                            ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas
                            leo orci pharetra sed diam. 
                        </span>
                    </div>
                    <div>
                        <button class="features_descr_btn">watch collection</button>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="title">
                    <h4>New Arrivals</h4>
                    <div class="line"></div>
                </div>
                <div class="commercial">

                    <div class="commercial_item">
                        <div class="commercial_item_block">
                            <img src={watch} alt="logo"/>
                        </div>
                        <div class="commercial_item_text">
                            <span>Louis XVI ATHOS</span><br/>
                            <span>165 000 uah</span>
                        </div>
                    </div>
                    
                    <div class="commercial_item">
                        <div class="commercial_item_block">
                            <img src={watch} alt="logo"/>
                        </div>
                        <div class="commercial_item_text">
                            <span>Louis XVI ATHOS</span><br/>
                            <span>165 000 uah</span>
                        </div>
                    </div>

                    <div class="commercial_item">
                        <div class="commercial_item_block">
                            <img src={watch} alt="logo"/>
                        </div>
                        <div class="commercial_item_text">
                            <span>Louis XVI ATHOS</span><br/>
                            <span>165 000 uah</span>
                        </div>
                    </div>

                    <div class="commercial_item">
                        <div class="commercial_item_block">
                            <img src={watch} alt="logo"/>
                        </div>
                        <div class="commercial_item_text">
                            <span>Louis XVI ATHOS</span><br/>
                            <span>165 000 uah</span>
                        </div>
                    </div>

                    <div class="commercial_item">
                        <div class="commercial_item_block">
                            <img src={watch} alt="logo"/>
                        </div>
                        <div class="commercial_item_text">
                            <span>Louis XVI ATHOS</span><br/>
                            <span>165 000 uah</span>
                        </div>
                    </div>
                    
                    <div class="commercial_item">
                        <div class="commercial_item_block">
                            <img src={watch} alt="logo"/>
                        </div>
                        <div class="commercial_item_text">
                            <span>Louis XVI ATHOS</span><br/>
                            <span>165 000 uah</span>
                        </div>
                    </div>
                    
                    <div class="commercial_item">
                        <div class="commercial_item_block">
                            <img src={watch} alt="logo"/>
                        </div>
                        <div class="commercial_item_text">
                            <span>Louis XVI ATHOS</span><br/>
                            <span>165 000 uah</span>
                        </div>
                    </div>

                    <div class="commercial_item">
                        <div class="commercial_item_block">
                            <img src={watch} alt="logo"/>
                        </div>
                        <div class="commercial_item_text">
                            <span>Louis XVI ATHOS</span><br/>
                            <span>165 000 uah</span>
                        </div>
                    </div>
                    
                </div>
                <div >
                    <button class="commercial_btn">смотреть еще</button>
                </div>
            </div>
        </section>

        <section>
            <div class="brands">
                <div class="container">
                    <h4>our brands</h4>
                    <div class="line"></div>
                    <div class="brands_list">
                        <img src={brand} alt="brand"/>
                        <img src={brand} alt="brand"/>
                        <img src={brand} alt="brand"/>
                        <img src={brand} alt="brand"/>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div class="footer">
                <div class="container">
                    <div class="footer_block">
                        <div class="footer_about">
                            <h4>About shop</h4>
                            <div class="footer_about_box">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper 
                                    viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet 
                                    consectetur vel vitae aliquam dictum suspendisse. Lobortis eget 
                                    consequat, tellus et et sed turpis. Pretium quisque vitae, amet, 
                                    porttitor odio ultricies massa pharetra leo. Et ipsum urna fames 
                                    in sit mi ultrices nisi, nunc.
                                </span>
                            </div>
                        </div>
                        <div class="footer_category">
                            <h4>Категории</h4>
                            <div class="footer_category_list">
                                <div class="item">
                                    <span>часы</span>
                                </div>
                                <div class="item">
                                    <span>браслеты</span>   
                                </div>
                                <div class="item">
                                    <span>ремни</span>
                                </div>
                                <div class="item">
                                    <span>ювелирные изделия</span>
                                </div>
                                <div class="item">
                                    <span>запонки</span>
                                </div>
                            </div>
                        </div>
                        <div class="footer_link">
                            <h4>Рaссылка</h4>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.
                            </span>
                            <div class="footer_link_box">
                                <input class="input" placeholder="enter your e-mail" type="text"/>
                                <button>подписаться</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="subfooter">
                <div class="info">
                    <span>Сделал: Саенко Сергей</span>
                    <a target="_blank" href="https://github.com/YourContender">Мой GitHub</a>
                    <a target="_blank" href="https://www.figma.com/file/0a01UVA3pCxrJTXErEGLho/PORTEN?node-id=0%3A1">Оригинал дизайна</a>
                </div>
                <div>
                    <span>© 2022</span>
                </div>
            </div>
        </footer>  
    </>
    );
}

export default App;
