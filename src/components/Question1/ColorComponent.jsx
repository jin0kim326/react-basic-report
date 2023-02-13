import React from 'react';
import styles from './ColorComponent.module.css';
import { COLOR } from './Question1';

// 🧸 Question1 컴포넌트(상위 컴포넌트) 에서 color라는 props를 전달했어요. 
//    그것을 자식컴포넌트에서 사용하기 위해서는 어떻게 해야하죠?
export default function ColorComponent() {
    return (
        <div className={`${styles.box} /** 🔥 🧸 전달받은 props가 red이면 bg_red 적용, blue면 bg_blue 적용해보기!  */`} >
            <p className={styles.font}> 이 박스의 색을 바꾸세용</p>
        </div>
    );
}

