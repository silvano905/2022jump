import Head from 'next/head'
import Nav from './components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import articleStyles from "../styles/Article.module.css";


export default function JumpStartServiceBerwyn() {
    return (
        <div>
            <Head>
                <title>Car Jump Start Service Berwyn,IL For $39. Fast Jump Start Car Service.</title>
                <meta name="description" content="Free ETA. Car Battery Jump Start Service Near Berwyn,IL $39. Car won't start? Need a jump start car service in Berwyn, Illinois?" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={articleStyles.grid}>
                <div className={articleStyles.card}>
                    <Image src="compressed-car-towing-jump-chicago-small.webp" alt="jump"/>
                </div>
                <div>
                    <h1 className={articleStyles.title}>Car jump service in Berwyn, IL</h1>
                </div>
                <div className={articleStyles.card}>
                    <h3>Price for a car jump start service</h3>
                    <p>$49.00</p>
                    <p>Final price, we only charge you if the jump start was successful.</p>

                </div>
                <div className={articleStyles.card}>
                    <h3>How to pay for jump start</h3>
                    <p>You can pay with credit/debit card, cash or Venmo</p>
                </div>
                <div className={articleStyles.activeCard}>
                    <h3>How to request a car jump-start</h3>
                    <p>1. Make an appointment</p>
                    <p>2. Driver arrives to jump your car</p>
                    <p>3. Complete payment</p>

                    <div>
                        <a href="https://app.acuityscheduling.com/schedule.php?owner=18280216&calendarID=3244208">
                            Make Appointment
                        </a>
                    </div>

                </div>

                <div className={articleStyles.card}>
                    <h3>Why your car might need a jump start</h3>
                    <ul>
                        <li>
                            Car Won't Start
                            <ul>
                                <li>Car makes a clicking noise, but it doesn't start or no sound at all.</li>
                            </ul>
                        </li>

                        <li>
                            Dead or Weak Battery
                            <ul>
                                <li>Excessive heat or cold weather can weaken your battery or you left your lights on.</li>
                            </ul>
                        </li>

                        <li>
                            If You Haven't Driven Your Car in Days
                            <ul>
                                <li>It has been 1 or more weeks since you last drove your car.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={articleStyles.card}>
                    <h3>Reviews</h3>
                    <ul>
                        <li>
                            <>
                                <h5>Location: Berwyn, IL</h5>
                                <p>“Had no idea what a car jump start service was. Literally the car started in seconds.„</p>
                            </>
                        </li>

                        <li>
                            <>
                                <h5>Location: Berwyn, IL</h5>
                                <p>“Had a dead car battery because of the cold weather and these guys had the cheapest jump start service.„</p>
                            </>
                        </li>

                        <li>
                            <>
                                <h5>Location: Berwyn, Illinois</h5>
                                <p>“Best roadside assistance. Car had no power and these guys helped me. $39 for a jump start is excellent.„</p>
                            </>
                        </li>

                    </ul>
                </div>

                <div className={articleStyles.card}>
                    <h3>Locations</h3>
                    <h4>Berwyn, IL 60402</h4>

                </div>

                <div className={articleStyles.card}>
                    <h3>About us</h3>
                    <p>Batteryjumpchicago has been in business for over 3 years in the Berwyn area. We provide our customers with
                        the best car jump service in Berwyn. Need a jump start? or your car won't start? we can help.
                    </p>
                    <h4>Batteryjumpchicago</h4>
                    <h5><strong>Jump start car service</strong></h5>
                    <h5><strong>No towing service</strong></h5>
                    <h4>Business Hours</h4>
                    <h5>Mon-Fri: 7AM - 10AM</h5>
                    <h5>Sat-Sun: 7AM - 10AM</h5>
                    <h5>Berwyn,IL 60402</h5>
                    <h5>(708)-548-9664</h5>

                </div>

            </div>
        </div>
    )
}