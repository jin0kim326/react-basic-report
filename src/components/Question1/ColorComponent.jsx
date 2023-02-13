import React from 'react';
import styles from './ColorComponent.module.css';
import { COLOR } from './Question1';

// 🧸 Question1 컴포넌트(상위 컴포넌트) 에서 color라는 props를 전달했어요. 
//    그것을 자식컴포넌트에서 사용하기 위해서는 어떻게 해야하죠?
export default function ColorComponent({color}) {
    
    return (
        <div className={`${styles.box} ${color === COLOR.RED ? styles.bg_red : styles.bg_blue}`} >
            <p className={styles.font}> 이 박스의 색을 바꾸세용</p>
        </div>
    );
}

