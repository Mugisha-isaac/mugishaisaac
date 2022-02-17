

export default function Buy(){
    return(
        <div className="" style={{width:'80%', marginLeft:'15em', height:'20%', marginTop:'5em'}} >
                <span>Dashboard</span>

                <div className="grid grid-cols-2 grid-rows-1 pt-10">
                    <div className="">
                        <p className="py-5">Summary</p>
                        <div className="bg-form_color">
                        <img style={{position:'relative'}} src="https://lh3.googleusercontent.com/g0Jw-I6-gH2DVCpnl3u8QKZVT_meR9lcJlpyeSZ-MyvwLnyEZvgyrY5frldA8HCv55s=w280-rwa" height={300} width={300} />
                        <div className="absolute" style={{position:'absolute', top:'22em', left:'32em'}}>
                        <p className="pb-3">Daily revenue</p>
                        <p className="pb-2">32.19 kWh</p>
                        <p>+12% from a week</p>
                        </div>
                        
                        </div>
                        
                    </div>
                    <div>Perfomance</div>
                </div>
        </div>
    )
}