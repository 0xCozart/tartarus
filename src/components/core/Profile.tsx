
const Profile = () => {
  return (
    <div>
      		<div
			className="card  min-w-sm border border-gray-700 bg-gray-700 text-gray-50   transition-shadow shadow-xl hover:shadow-xl min-w-max">
			<!---->
			<div className="w-full card__media"><img src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg" className="h-48 w-96"></div>
			
				<div className="flex items-center p-4">
					<div className="relative flex flex-col items-center w-full">
						<div
							className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-400 min-w-max absolute -top-16 flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
							<img className="h-24 w-24 md rounded-full relative" src="https://avatars3.githubusercontent.com/u/11801238?v=4" alt="">
							<div className="absolute"></div>
						</div>
						<div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
							<span className="text-md whitespace-nowrap text-gray-50 font-semibold">Brahim</span><span className="text-md whitespace-nowrap text-gray-100">boussadjra</span>
							<p className="text-sm text-gray-200">
								I can't start my day without a coffee cup
							</p>
							<div className="py-2 flex space-x-2">
								<button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max border bg-transparent border-purple-400 text-purple-400 hover:border-purple-800 hover:border-purple-500 px-4 py-1 flex items-center hover:shadow-lg"><span className="mr-2"></span>FOLLOW<span className="ml-2"></span></button><button className="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  focus:border-blue-300 rounded max-w-max text-gray-100 bg-green-500 hover:bg-green-600 px-4 py-1 flex items-center hover:shadow-lg"><span className="mr-2"><svg height="20" width="20" viewBox="0 0 32 32" className="fill-current text-red-100"><path d="M22.5,4c-2,0-3.9,0.8-5.3,2.2L16,7.4l-1.1-1.1C12,3.3,7.2,3.3,4.3,6.2c0,0-0.1,0.1-0.1,0.1c-3,3-3,7.8,0,10.8L16,29	l11.8-11.9c3-3,3-7.8,0-10.8C26.4,4.8,24.5,4,22.5,4z"></path></svg></span>SPONSOR <span className="ml-2"></span></button>
							</div>
							<div
								className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
								<span className="text-center px-2"><span className="font-bold text-gray-50">56</span><span className="text-gray-100"> followers</span></span><span className="text-center px-2"><span className="font-bold text-gray-50">112</span><span className="text-gray-100"> following</span></span><span className="text-center px-2"><span className="font-bold text-gray-50">27</span><span className="text-gray-100"> repos</span></span>
							</div>
						</div>
					</div>
				</div>
				<!---->
			</div>
    </div>
  )
}

export default Profile
