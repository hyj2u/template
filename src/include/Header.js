import icoNav1 from '../images/ico_nav1.png';
import icoNav2 from '../images/ico_nav2.png';
import icoNav3 from '../images/ico_nav3.png';
import icoMenu from '../images/ico_menu.png';
import { useState } from 'react';

function Header({ viewType, setviewType }){

    const [isShowNav, setisShowNav] = useState(false);

    return(
        <>
        <header>
            <button className="btnMobileMenu" onClick={() => setisShowNav(true)}>
            <img src={icoMenu} alt="메뉴" />
            </button>
            <nav className={isShowNav ? 'active' : ''}> 
            <h1>DashBoard</h1>
            <h2>
                <img src={icoNav1} alt="디지털자산관리" />
                <span>디지털자산관리</span>
            </h2>
                <ul>
                    <li>
                        <button>&#183; 요약</button>
                    </li>
                    <li>
                        <button>&#183; 위험모니터링</button>
                    </li>
                    <li>
                        <button>&#183; HB-Pool : 등급</button>
                    </li>
                </ul>

                <h2>
                    <img src={icoNav2} alt="비불리 거래소" />
                    <span>비불리 - 거래소</span>
                </h2>
                <ul>
                    <li>
                        <button>&#183; Invictus : 디지털 자산 전략</button>
                    </li>
                    <li>
                        <button>&#183; PlanX : 주문처리</button>
                    </li>
                </ul>

                <h2>
                    <img src={icoNav3} alt="온체인 분석" />
                    <span>온체인 분석</span>
                </h2>
                <ul>
                    <li className='active'>
                        <button>&#183; Horus</button>
                        <ul className='depth2'>
                            <li className={viewType == 'market' ? 'active' : '' }
                                onClick={() => setviewType('market')}>
                                <button>&#183; Market monitoring</button>
                            </li>
                            <li className={viewType == 'bitcoin' ? 'active' : '' }
                                onClick={() => setviewType('bitcoin')}>
                                <button>&#183; Bitcoin</button>
                            </li>
                            <li className={viewType == 'ethereum' ? 'active' : '' }
                                onClick={() => setviewType('ethereum')}>
                                <button>&#183; Ethereum</button>
                            </li>
                            <li className={viewType == 'tron' ? 'active' : '' }
                                onClick={() => setviewType('tron')}>
                                <button>&#183; Tron</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button>&#183; 캘린더 / 디스클로저</button>
                    </li>
                    <li>
                        <button>&#183; 질문(Q/A)</button>
                    </li>
                    <li>
                        <button>&#183; 고객정보관리</button>
                    </li>
                </ul>
            </nav>
            <div className="bg" onClick={() => setisShowNav(false)}></div>
        </header>
        
        </>
    )
}



export default Header;
