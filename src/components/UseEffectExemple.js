import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react'
import { useState,useEffect } from 'react'

// useEffect: componentlerin doğma, güncellenme ve yok olma anlarını yakalamamıza yarar.

function UseEffectExemple() {
    const [number,setNumber] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=> {  //herhangi bir state değiştiğinde çalışır
        console.log('state güncellendi')
    });

    useEffect(()=> {  //number  state i değiştiğinde çalışır
        console.log(' number state güncellendi')
    },[number]);
    
    useEffect(()=> {  //number veya name  state i değiştiğinde çalışır
        console.log(' number veya name state güncellendi')
    },[number,name]);

    useEffect(()=> {
        console.log('component mount edildi')

       


    },[]); //ikinci parametre olarak boş dizi verilmesi: componentin oluşma anını yakalaması için verilir.
    //dipendence array olarak adlandırılır. bağımlılık arayı


    useEffect(()=> {
        console.log('component oluştu');

         //componene oluşturulduğunda saniyede bir kez number değişkenini bir artırır.
         const interval = setInterval(()=> {
            setNumber(number+1);

        },1000)
        
        // componene kaldırıldığında oluşacakları buraya yazabiliriz.
        return ()=> {
            console.log('component unmount edildi')
           
            // component kaldırıldığında performansın düşmemesi için asekron çalışan yapılar sonlandırılmalı
            clearInterval(interval) 
        }
    },[]);
  return (
    <div>

        <h1>{number}</h1>
        <button onClick={()=> setNumber(number + 1)}>click</button>
        <hr />

        <h1>Mehmet</h1>
        <button onClick={()=> setName("Ahmet")}>click</button>

      
    </div>
  )

 
}

export default UseEffectExemple
