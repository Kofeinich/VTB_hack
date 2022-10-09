import styles from './NftDetailsPage.module.css'
import {Layout} from "../../components/Layout/Layout";
import nft from '../../assets/img/nft1.png'
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getNftById} from "../../api/api";

export const NftDetailsPage = () => {

	const [title, setTitle] = useState("Science fiction #0001")
	const [owner, setOwner] = useState("Максим Зайцев")
	const [price, setPrice] = useState("150")
	// const [imgUrl, setImgUrl] = useState("")

	const params = useParams()
	const navigation = useNavigate()

	const getData = async () => {
		const response = await getNftById(params.id)
		setTitle(response.name)
		setPrice(response.price)
		setOwner(response.owner)
		// setImgUrl(`http://192.168.0.108:10880/api/v1/files/${response.uri}`)
	}

	useEffect(() => {
		// getData()
	}, [params.id])


	return (
		<Layout>
			<div className={styles.page}>
				<div className={styles.column}>
					<img src={nft} alt="nft" className={styles.nft}/>
				</div>
				<div className={styles.column}>
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.ownerContainer}>
						<p className={styles.text}>Текущий владелец</p>
						<p className={styles.owner}>{owner}</p>
					</div>
					<div className={styles.sellCard}>
						<div className={styles.priceCard}>
							<p className={styles.text}>Стоимость</p>
							<p className={styles.price}>{price} DR</p>
						</div>
						<button className="btn_filled">Продать</button>
						<button className="btn_outlined" onClick={() => {navigation('/transfer')}}>Перевести</button>
					</div>
				</div>
			</div>
		</Layout>
	)
}
