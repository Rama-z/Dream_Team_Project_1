import React, { Component } from 'react';
import styles from '../styles/Notification.module.css';
import icon_sifa from '../asset/icon_Syifa.png';
import icon_Aisya from '../asset/icon_Aisya.png';
import icon_Aisya_2 from '../asset/icon_Aisyah_2.png';
import icon_online from '../asset/icon_online.png';
import icon_row from '../asset/icon_row.png';

class Notification extends Component {
  render() {
    return (
      <>
        <main>
          <section>
            <div className="container-fluid">
              <div className={`${styles['content']}`}>
                <div className={styles['chat']}>Chat</div>
                <p className={styles['text']}>See your notifications for the latest updates</p>
              </div>
              <div className="container d-flex justify-content-center pt-5">
                <div className={`${styles['content-left']} col-4`}>
                  <div className={`${styles['content-left-border']} d-flex ps-4 pt-3 `}>
                    <img src={icon_sifa} alt="icon_sifa" />
                    <img className={styles['icon_online']} src={icon_online} alt="icon_online" />
                    <div className={styles['name']}>Syifa Guys</div>
                    <div className={styles['online']}>online</div>
                  </div>
                  <div className={`${styles['content-left-botom']} d-flex ps-4 pt-3`}>
                    <img src={icon_Aisya} alt="icon_Aisya" />
                    <img className={styles['icon_online_one']} src={icon_online} alt="icon_online" />
                    <img className={styles['icon_row']} src={icon_row} alt="icon_online" />
                    <div className={styles['name_sifa']}>Aisyah 12</div>
                    <div className={styles['online_one']}> lorem ipsum dolor sit amet</div>
                  </div>
                  <div className={`${styles['content-left-botom']} d-flex ps-4 pt-3`}>
                    <img src={icon_Aisya_2} alt="icon_Aisya" />
                    <img className={styles['icon_online_one']} src={icon_online} alt="icon_online" />
                    <img className={styles['icon_row']} src={icon_row} alt="icon_online" />
                    <div className={styles['name_sifa']}>Aisyah 13</div>
                    <div className={styles['online_one']}> lorem ipsum dolor sit amet</div>
                  </div>
                </div>
                <div className={`${styles['content-right']} col-6`}>
                  <div className={`${styles['content-right-border']} d-flex ps-4 pt-3 `}>
                    <img src={icon_Aisya} alt="icon_Aisya" />
                    <img className={styles['icon_online']} src={icon_online} alt="icon_online" />
                    <div className={styles['name']}>Syifa Guys</div>
                    <div className={styles['online']}>online</div>
                  </div>
                  <div className={`${styles['content-right-botom']} d-flex ps-4 pt-3 `}>
                    <p className={styles['message']}>White your message</p>
                    <button className={styles['send']}>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Notification;