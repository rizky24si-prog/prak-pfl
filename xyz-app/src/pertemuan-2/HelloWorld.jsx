export default function HelloWorld(){
     const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <GreetingBinjai/>
            <GreetingBinjai/>
            <UserCard 
	            nama="Rizky" 
	            nim="2457301097"
	            tanggal={new Date().toLocaleDateString()}
	        />
            <UserCard {...propsUserCard}/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small className="card">Salam Dari Binjai 👋 <br /></small>
    )
}

function UserCard(props){
    return (
        <div className="card">
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}