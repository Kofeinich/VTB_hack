import styles from './Profile.module.css';

import {ArrowButton} from "../../assets/svg/ArrowButton";
import {EventCard} from "../EventCard/EventCard";
import {ActivitySection} from "../../pages/MainPage/sections/ActivitySection/ActivitySection";
import {NFTCards} from "../NFTCards/NFTCards";
import {useEffect, useState} from "react";
import {getProfile, getProfileById} from "../../api/api";
import {useAuthContext} from "../../context/AuthContext";
import {useNavigate} from "react-router-dom";

export const Profile = ({ id = null }) => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [lvl, setLvl] = useState(1)
    const [collection, setCollection] = useState([])

    const navigate = useNavigate()

    const profile =  {
       "lastName" : "Mitr",
        "name" : "Egor",
    }


    const events = [
        {
            title: "Мероприятие 1",
            description: "Описание мероприятия, любой текст Подробности, уcловия и вся дополнительная информация",
            date: "17 Сентября 2022 17;55",
            rewards: ["+500 XP", "NFT-Сертификат"]
        },
        {
            title: "Мероприятие 1",
            description: "Описание мероприятия, любой текст Подробности, уcловия и вся дополнительная информация",
            date: "17 Сентября 2022 17;55",
            rewards: ["+500 XP", "NFT-Сертификат"]
        },
    ]

    const fetchData = async () => {
        let user
        if (id) {
            user = await getProfileById(id)
        } else {
            user = await getProfile()
        }
        console.log(user)
        setName(user.name)
        setLastName(user.lastName)
        setLvl(user.lvl)
    }

    useEffect(() => {
        fetchData()
    }, [id])


    return (
        <section className={styles.profile}>
            <div className={styles.profileWrapper}>
                <div className={styles.picture}/>
                <div className={styles.bar}>
                    <div className={styles.barFlex}>
                        <div className={styles.lvl}>{lvl}</div>
                        <p className={styles.par}>{name} {lastName}</p>
                        <div className={styles.random}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="9" fill="#0C0F12" fill-opacity="0.8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4047 9.05039C16.9919 7.64987 15.0081 7.64987 14.5953 9.05039L14.4952 9.39003C14.2315 10.2849 13.2094 10.7083 12.3901 10.262L12.0791 10.0926C10.7969 9.39422 9.39422 10.7969 10.0926 12.0791L10.262 12.3901C10.7083 13.2094 10.2849 14.2315 9.39003 14.4952L9.05039 14.5953C7.64987 15.0081 7.64987 16.9919 9.05039 17.4047L9.39003 17.5048C10.2849 17.7685 10.7083 18.7906 10.262 19.6099L10.0926 19.9209C9.39422 21.2031 10.7969 22.6058 12.0791 21.9074L12.3901 21.738C13.2094 21.2917 14.2315 21.7151 14.4952 22.61L14.5953 22.9496C15.0081 24.3501 16.9919 24.3501 17.4047 22.9496L17.5048 22.61C17.7685 21.7151 18.7906 21.2917 19.6099 21.738L19.9209 21.9074C21.2031 22.6058 22.6058 21.2031 21.9074 19.9209L21.738 19.6099C21.2917 18.7906 21.7151 17.7685 22.61 17.5048L22.9496 17.4047C24.3501 16.9919 24.3501 15.0081 22.9496 14.5953L22.61 14.4952C21.7151 14.2315 21.2917 13.2094 21.738 12.3901L21.9074 12.0791C22.6058 10.7969 21.2031 9.39422 19.9209 10.0926L19.6099 10.262C18.7906 10.7083 17.7685 10.2849 17.5048 9.39003L17.4047 9.05039ZM16 18.9288C17.6175 18.9288 18.9288 17.6175 18.9288 16C18.9288 14.3825 17.6175 13.0712 16 13.0712C14.3825 13.0712 13.0712 14.3825 13.0712 16C13.0712 17.6175 14.3825 18.9288 16 18.9288Z" fill="#4789EB"/>
                            </svg>
                        </div>
                    </div>
                    <button className={styles.button} onClick={() => {navigate('/transfer')}}>
                        <ArrowButton/>
                        <p className={styles.par}>Перевод</p>
                    </button>
                </div>
                <NFTCards/>
                <ActivitySection />
                <section className={styles.section}>
                    <h2 className="section__title">
                        Ближайшие мероприятия
                    </h2>
                    <div className={styles.eventsContainer}>
                        {
                            events.map((event, index) => {
                                return <EventCard
                                    title={event.title}
                                    description={event.description}
                                    date={event.date}
                                    rewards={event.rewards}
                                />
                            })
                        }
                    </div>
                </section>
            </div>
        </section>
    )
}
