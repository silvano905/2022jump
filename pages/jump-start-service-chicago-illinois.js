import Head from 'next/head'
import Nav from './components/Nav'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import articleStyles from "../styles/Article.module.css";

const locations = [
    '60606, Chicago, IL', '60607, Chicago, IL', '60608, Chicago, IL', '60610, Chicago, IL', '60611, Chicago, IL',
    '60612, Chicago, IL', '60613, Chicago, IL', '60614, Chicago, IL', '60616, Chicago, IL', '60618, Chicago, IL',
    '60622, Chicago, IL', '60623, Chicago, IL', '60624, Chicago, IL', '60302, Chicago, IL', '60402, Chicago, IL',
    '60625, Chicago, IL', '60630, Chicago, IL', '60638, Chicago, IL', '60639, Chicago, IL', '60640, Chicago, IL',
    '60641, Chicago, IL', '60642, Chicago, IL', '60644, Chicago, IL', '60647, Chicago, IL', '60651, Chicago, IL',
    '60654, Chicago, IL', '60657, Chicago, IL', '60661, Chicago, IL', '60304, Chicago, IL', '60804, Chicago, IL'
]

export default function jumpStartServiceChicagoIllinois() {
    return (
        <div>
            <Head>
                <title>Jump Start Car Service in Chicago, Illinois. Need A Battery Jump-start?</title>
                <meta name="description" content="Car jump start service in Chicago, Il for $39. Credit card accepted or Venmo." />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>

            <div className={articleStyles.grid}>
                <div className={articleStyles.card}>
                    <Image src="/compressed-car-towing-jump-chicago-small.webp" alt="jump start car service in Chicago, IL" width='400' height='300'/>
                </div>
                <div>
                    <h1 className={articleStyles.title}>Jump start service in Chicago, IL</h1>

                </div>
                <div className={articleStyles.card}>
                    <h3>Price for a car jump start service</h3>
                    <p>$39.00</p>
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
                    <h3>How we perform a jump start service</h3>
                    <p>1. We locate the battery in your car</p>
                    <p>2. We connect our portable battery to your battery in your car</p>
                    <Image src="/jnc_comp.webp" alt="free jump start car service in Chicago, IL" width='300' height='300'/>
                    <p>3. Now you turn on your car</p>
                    <p>4. Done!</p>
                </div>

                <div className={articleStyles.card}>
                    <h1 className={articleStyles.title}>How to jump start a car?</h1>
                    <a href="https://www.dummies.com/home-garden/car-repair/how-to-jump-start-a-car/">Info here</a>
                </div>

                <div className={articleStyles.card}>
                    <h1 className={articleStyles.title}>Why your car might need a jump start</h1>
                    <ul>
                        <li>
                            Car Won&apos;t Start
                            <ul>
                                <li>Car makes a clicking noise, but it doesn&apos;t start or no sound at all.</li>
                            </ul>
                        </li>

                        <li>
                            Dead or Weak Battery
                            <ul>
                                <li>Excessive heat or cold weather can weaken your battery or you left your car lights on.</li>
                            </ul>
                        </li>

                        <li>
                            If You Haven&apos;t Driven Your Car in Days
                            <ul>
                                <li>It has been 1 or more weeks since you last drove your car.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className={articleStyles.card}>
                    <h1 className={articleStyles.title}>Learn why your car battery fails</h1>
                    <ul>
                        <li>
                            Battery Life
                            <ul>
                                <li>
                                    The typical car battery lasts 3 to 5 years, depending on the type of climate you live in.
                                    If you live in an area that experiences extreme heat or cold, your battery might not make
                                    it to its third birthday. If you mostly use your car for short trips (an average run time
                                    of less than 20 minutes), your battery may not have a long life because your alternator
                                    rarely gets the opportunity to fully recharge it.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Why Car Batteries Fail
                            <ul>
                                <li>
                                    Extreme heat or cold can increase your battery&apos;s rate of discharge, making winter a
                                    triple-threat to your battery. All that exposure to summer&apos;s heat evaporates the water
                                    in the electrolyte, increasing sulfation. Then winter rolls around, and freezing
                                    temperatures slow the chemical reactions occurring inside a lead acid battery, further
                                    reducing your battery&apos;s ability to perform. At the same time, a cold engine and sluggish
                                    oil demand more power, while power-hungry features like heat and defrost place more
                                    demand on your battery. Although lead acid batteries last an average of four years,
                                    they can fail earlier under the right (or wrong) conditions.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Functions Of A Car Battery
                            <ul>
                                <li>
                                    A car battery is the most crucial piece of equipment to starting and driving your vehicle.
                                    It sends power from the starter motor to the sparks plugs, igniting your car&apos;s fuel,
                                    while also giving other systems power. This includes lights, radio, air conditioning,
                                    and more. You may be able to tell when your car battery starts to die if you find it
                                    difficult to start, have flickering lights, or a weakening alarm system.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                

                <div className={articleStyles.card}>
                    <h3>Reviews</h3>
                    <ul>
                        <li>
                            <>
                                <h5>Location: Downtown Chicago, IL</h5>
                                <p>“Had no idea what a car jump start service was. Literally the vehicle started in seconds.„</p>
                            </>
                        </li>

                        <li>
                            <>
                                <h5>Location: Lake View Chicago, IL</h5>
                                <p>“Had a dead car battery because of the cold weather and these guys had the cheapest jump start service.„</p>
                            </>
                        </li>

                        <li>
                            <>
                                <h5>Location: Cook County, Illinois</h5>
                                <p>“Best roadside assistance. Auto had no power and these guys helped me. $39 for a jump start is excellent.„</p>
                            </>
                        </li>

                    </ul>
                </div>

                <div className={articleStyles.card}>
                    <h1 className={articleStyles.title}>Locations</h1>

                    <ul>
                        {locations.map((item) => (
                            <li key={item}><strong>{item}</strong></li>
                        ))}
                    </ul>

                </div>

                <div className={articleStyles.card}>
                    <h3>About us</h3>
                    <p>Batteryjumpchicago has been in business for over 3 years in the chicago area. We provide our customers with
                        the best car jump service in Chicago. Need a jump start? or your car won&apos;t start? we can help. Top vehicle jump-start services in Downtown Chicago, IL.
                    </p>
                    <div>
                        <h4>Batteryjumpchicago</h4>
                        <h5><strong>Jump start car service Chicago, IL</strong></h5>
                        <h5><strong>No towing service</strong></h5>
                        <h4>Business Hours</h4>
                        <h5>Mon-Fri: 7AM - 10AM</h5>
                        <h5>Sat-Sun: 7AM - 10AM</h5>
                        <h5>Chicago,IL 60630</h5>
                        <h5>(708)-548-9664</h5>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47530.11611240292!2d-87.65641644328424!3d41.87925788741003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2caf74846717%3A0xbc3dc7eb0e09bbfd!2sDowntown%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1632933648835!5m2!1sen!2sus"
                            width="320" height="300" allowFullScreen="" loading="lazy"/>

                        <h6>Copyright© 2021, Batteryjumpchicago. All Rights Reserved</h6>
                    </div>

                </div>

            </div>

        </div>
    )
}