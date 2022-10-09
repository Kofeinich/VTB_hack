import {Box, Flex, chakra, Text} from "@chakra-ui/react"
import {Search} from "../Search/Search";
import styles from "../../pages/MainPage/sections/TopCommunitiesSection/TopCommunitiesSection.module.css";
import droid from "../../assets/img/droid.png";
import veiderTop from "../../assets/img/veider2.png";
import veider from "../../assets/img/veider.png";
import yoda from "../../assets/img/yoda.png";
import nft from '../../assets/img/nft1.png'
import {useNavigate} from "react-router-dom";

export const NFTCards = () => {

    const navigate = useNavigate()

    return (
        <Box mt={'25px'} p={'30px 50px 30px 50px'} w={'100%'} h={'340px'} bg={'#1A1E23'} borderRadius={'6px'}>
            <Flex justify={'space-between'}>
                <Search placeholder={'Поиск NFT'}/>
                <Box p={'8px 15px 8px 15px'}
                     w={'190px'}
                     borderRadius={'6px'}
                     border={'1px solid white'}
                     fontFamily={'Raleway Bold, sans-serif;'}
                     fontSize={'12px'}
                     color={'#7F7878'}
                >
                    <chakra.span>Сортировать по:    </chakra.span><chakra.span color={'#4789EB'}>Дата</chakra.span>
                </Box>
            </Flex>
            <Text mb={'10px'} color={'white'} fontWeight={'700'} w={'100%'} align={'left'}>Избранные NFT</Text>
            <Box>
                <div className={styles.communities}>
                    <div className={styles.communitiesItem} onClick={() => {window.location.href = '/nft-details/0001'}}>
                        <img src={nft} alt="" className={styles.nft}/>
                        <p className={styles.communitiesItemTitle}>Science fiction #0001</p>
                        <p className={styles.communitiesItemSize}>Стоимость 150 DR</p>
                    </div>
                    <div className={styles.communitiesItem}>
                        <img src={veiderTop} alt="" className={styles.nft}/>
                        <p className={styles.communitiesItemTitle}>Cars #0023</p>
                        <p className={styles.communitiesItemSize}>Стоимость 64 DR</p>
                    </div>
                    <div className={styles.communitiesItem}>
                        <img src={yoda} alt="" className={styles.nft}/>
                        <p className={styles.communitiesItemTitle}>Science fiction</p>
                        <p className={styles.communitiesItemSize}>Стоимость 435 DR</p>
                    </div>
                    <div className={styles.communitiesItem}>
                        <img src={veider} alt="" className={styles.nft}/>
                        <p className={styles.communitiesItemTitle}>Star Wars #0012</p>
                        <p className={styles.communitiesItemSize}>Стоимость 25 DR</p>
                    </div>
                </div>
            </Box>
        </Box>
    )
}
