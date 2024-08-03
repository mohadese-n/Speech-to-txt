const SimpleText = () =>{
    return (
            <div className="px-4">
                <p className="text-right">با من آمد....</p>
                <audio controls className="w-100 bottom-0 relative rounded" style={{backgroundColor:'#eee',height:"30px"}}>
                    <source className="bg-white" src="" type="audio/mp3"></source>
                </audio>
            </div>
        )

}
export default SimpleText;