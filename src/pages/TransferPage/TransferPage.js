import styles from './TransferPage.module.css'
import {Layout} from "../../components/Layout/Layout";
import {useState} from "react";
import avatar from '../../assets/svg/avatarStub.svg'

export const TransferPage = () => {

	const [userSearchTerm, setUserSearchTerm] = useState("");
	const [userSearchResult, setUserSearchResult] = useState([
		{
			name: "Дон Ягон",
			id: 123
		},
		{
			name: "Лена Головач",
			id: 456
		},
		{
			name: "Ясос Биба",
			id: 789
		},
	]);
	const [selectedNFT, setSelectedNFT] = useState(null);
	const [NFTSearchTerm, setNFTSearchTerm] = useState("");
	const [NFTSearchResult, setNFTSearchResult] = useState([
		{
			name: "Сертификат #123",
			id: 123
		},
		{
			name: "Сертификат #456",
			id: 456
		},
		{
			name: "Сертификат #789",
			id: 789
		},
	]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [activeTab, setActiveTab] = useState('DR');
	const [amount, setAmount] = useState("");
	const [userBalance, setUserBalance] = useState(35);

	const selectDrTab = () => {
		setActiveTab('DR')
	}

	const selectNftTab = () => {
		setActiveTab('NFT')
	}

	const userInputHandler = (e) => {
		setUserSearchTerm(e.target.value)
	}

	const userSelectHandler = (user) => {
		if (selectedUser == null) {
			setSelectedUser({
				name: user.name,
				id: user.id
			})
		} else {
			setSelectedUser(null)
		}
	}

	const NFTInputHandler = (e) => {
		setNFTSearchTerm(e.target.value)
	}

	const NFTSelectHandler = (nft) => {
		if (selectedNFT == null) {
			setSelectedNFT({
				name: nft.name,
				id: nft.id
			})
		} else {
			setSelectedNFT(null)
		}
	}

	const amountInputHandler = (e) => {
		setAmount(e.target.value)
	}

	return (
		<Layout>
			<div className={styles.card}>
				<h1 className={styles.title}>Перевод NFT и DR</h1>
				<div className={styles.content}>
					<div className={styles.step}>
						<p className={styles.stepTitle}>Получатель</p>
						{
							selectedUser === null ? (
								<>
									<input type="text" className="input" placeholder="Поиск получателя"
									       onInput={userInputHandler} value={userSearchTerm}/>
									<div className={styles.searchResults}>
										{
											userSearchResult.map((user, index) => {
												return (
													<div className={styles.resultUser} key={index} onClick={() => {
														userSelectHandler(user)
													}}>
														<img src={avatar} alt="avatar" className={styles.avatar}/>
														<p className={styles.resultUserName}>{user.name}</p>
													</div>
												)
											})
										}
									</div>
								</>
							) : (
								<div className={styles.resultUser} onClick={() => {
									userSelectHandler(selectedUser)
								}}>
									<img src={avatar} alt="avatar" className={styles.avatar}/>
									<p className={styles.resultUserName}>{selectedUser.name}</p>
								</div>
							)
						}
					</div>
					<div className={styles.step}>
						<div className={styles.tabsContainer}>
							<button className={activeTab === 'DR' ? styles.tabBtn_active : styles.tabBtn}
							        onClick={selectDrTab}>DR
							</button>
							<button className={activeTab === 'NFT' ? styles.tabBtn_active : styles.tabBtn}
							        onClick={selectNftTab}>NFT
							</button>
						</div>
						{
							activeTab === 'DR' ? (
								<>
									<input type="text" className="input" placeholder="Сумма перевода"
									       onInput={amountInputHandler} value={amount}/>
									<div className={styles.balance}>
										<p className={styles.balanceText}>На вашем счету</p>
										<p className={styles.balanceText}>{userBalance} DR</p>
									</div>
								</>
							) : (<>
									{
										selectedNFT == null ? (
											<>
												<input type="text" className="input" placeholder="NFT из вашей коллекции"
												       onInput={userInputHandler} value={userSearchTerm}/>
												<div className={styles.searchResults}>
													{
														NFTSearchResult.map((nft, index) => {
															return (
																<div className={styles.nft} key={index} onClick={() => {
																	NFTSelectHandler(nft)
																}}>
																	<p className={styles.balanceText}>{nft.name}</p>
																</div>
															)
														})
													}
												</div>
											</>
										) : (
											<div className={styles.nft} onClick={() => {
												NFTSelectHandler(selectedNFT)
											}}>
												<p className={styles.balanceText}>{selectedNFT.name}</p>
											</div>
										)
									}

								</>
							)
						}
					</div>
				</div>
				<button className="btn_filled">Перевести</button>
				{ activeTab == "DR" && <button className="btn_outlined">Перевести</button> }
			</div>
		</Layout>
	)
}
