import Link from 'next/link';

const Robots = (props) => {
    return (
        <div>
            <h1> Robots </h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <div> 
                {
                    props.robots.map(robot => (
                        <li key={robot.id}>
                            <Link href={`robots/${robot.id}`}>
                                <a> {robot.name} </a>
                            </Link>
                        </li>
                    ))
                }
            </div>
        </div>
    )
};

//Robots.getInitialProps = async function(){
//    const res = await fetch('https://jsonplaceholder.typicode.com/users');
//    const data = await res.json();
//    console.log(data);
//    return {
//        robots: data
//    }
//};

export async function getStaticProps(context){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    return {
        props: {robots: data}
    }
}

export default Robots;
