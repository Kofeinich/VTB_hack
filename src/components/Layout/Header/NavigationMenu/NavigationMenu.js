import React from 'react';
import styles from './NavigationMenu.module.css';
import close from '../../../../assets/svg/Cross.svg'
import enter from '../../../../assets/svg/Enter.svg'
import {Link} from "react-router-dom";
import {Box, Flex, chakra, Text} from "@chakra-ui/react"
import {useAuthContext} from "../../../../context/AuthContext";

export const NavigationMenu = ({
    isOpen,
    closeHandler,
}) => {

    const {userData, logout} = useAuthContext()

    return (
        <>
            { isOpen && <div className={styles.bg} onClick={closeHandler}/> }
            <div
                className={
                    isOpen ? styles.navigationMenuOpen : styles.navigationMenu
                }
            >
                <div className={styles.header}>
                    <p className={styles.name}>{userData.name} {userData.lastName}</p>
                    <img src={enter} alt="sign out" className={styles.enter} onClick={() => {logout()}}/>
                    <button className={styles.closeBtn} onClick={closeHandler}>
                        <img src={close} alt="close"/>
                    </button>
                </div>
                <div className={styles.navigationLinks}>
                    <Link to="/" className={styles.navigationLinksItem}>
                        Главная
                    </Link>
                    <Link to="/profile" className={styles.navigationLinksItem}>
                        Мой профиль
                    </Link>
                    <Link to="/achievements" className={styles.navigationLinksItem}>
                        Достижения
                    </Link>
                    <Link to="/transfer" className={styles.navigationLinksItem}>
                        Переводы
                    </Link>
                    <Link to="/achievements" className={styles.navigationLinksItem}>
                        Достижения
                    </Link>
                </div>
            </div>
        </>
    );
};
