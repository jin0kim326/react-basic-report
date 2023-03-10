import React from 'react';
import styles from './ColorComponent.module.css';
import { COLOR } from './Question1';

// ๐งธ Question1 ์ปดํฌ๋ํธ(์์ ์ปดํฌ๋ํธ) ์์ color๋ผ๋ props๋ฅผ ์ ๋ฌํ์ด์. 
//    ๊ทธ๊ฒ์ ์์์ปดํฌ๋ํธ์์ ์ฌ์ฉํ๊ธฐ ์ํด์๋ ์ด๋ป๊ฒ ํด์ผํ์ฃ ?
export default function ColorComponent({color}) {
    
    return (
        <div className={`${styles.box} ${color === COLOR.RED ? styles.bg_red : styles.bg_blue}`} >
            <p className={styles.font}> ์ด ๋ฐ์ค์ ์์ ๋ฐ๊พธ์ธ์ฉ</p>
        </div>
    );
}

