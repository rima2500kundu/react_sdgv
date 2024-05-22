import React, { useEffect, useState } from 'react'; // useEffect, useState are react Hooks. Hooks are used in functional components.

const TableApi = () => {
    const [data, setData] = useState([]);

    const callApi = () => {
        fetch('https://reqres.in/api/users?page=1').then((res)=>{
            res.json().then((result)=>{
                setData(result?.data);
            })
        })
    };

    useEffect(()=>{
        callApi();
    },[]); // dependancy array blank "[]" is passing so that api will be call only single time.

    console.log(data);
    
    return (
        <>
            <div className='container'>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>avatar</td>
                        </tr>

                        {/* Keys are significant in React because they aid in determining whether items in a list have been changed, updated, or removed.
                        This process helps React to optimize the rendering by recycling existing DOM elements. */}
                        {data && data.map((val, i)=> // i is parameter. We get index from i. i is unique key.
                            <tr key={i}>
                                <td>{val.id}</td>
                                <td>{val.first_name}</td>
                                <td> <img src={val.avatar} alt='images' width={50} height={50} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableApi;