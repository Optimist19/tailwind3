import pic1 from "../img/Section 15.png"
import pic2 from "../img/Section 16.png"

function Aword() {
  return (
	<section className="w-full px-5">
		<div className="">
			<div className="py-6">
				<img src={pic1} alt="" />
			</div>
			<div className="py-6">
				<img src={pic2} alt="" />
			</div>
		</div>
	</section>
  )
}

export default Aword