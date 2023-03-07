import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Todo from '~/components/Todo';



function Home() {
    const [posts, setPosts] = useState([]);

    const baseURL = 'https://clothesshop.herokuapp.com/api/auth/products';

    useEffect(() => {
        const getPost = async () => {
            const { data: res } = await axios.get(baseURL);
            setPosts(res);
        };
        getPost();
    }, []);

    if (!posts) return null;

    const getAlldata = () => {
        let datas = [];
        posts.map((value) => {
            const data = {
                id: value.product_id,
                name: value.product_name,
                price: value.price,
                image: 'https://levents.asia/wp-content/uploads/2023/01/z4062902869605_57b165da4120bccbe787fca0f9c2c058-400x500.jpg',
            };
            datas = [...datas, data];
        });
        return datas;
    };

    let todoList = getAlldata();

    const titleProduct = 'Những sản phẩm nổi bật';
    const numberProduct = [3,12];

    return (
        <>
            <Todo todoList={todoList} title={titleProduct} number={numberProduct}/>
        </>
    );
}

export default Home;
