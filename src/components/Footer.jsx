import React from "react"

const Footer = () => {
  return (
    <footer className="border-solid border-t-[1px] border-[#c5a47e] py-8">
        <div className="pl-8">
            <h1 className="uppercase text-white text-lg tracking-widest">pubdok photo studio</h1>
        </div>
        <div className="grid grid-cols-1 mt-6">
            <div className="px-8">
                <span className="uppercase text-[#c5a47e]">Contact</span>
                <div className="grid grid-cols-[30px_1fr] gap-4 mt-3 w-full overflow-hidden">
                    <div className="w-5 text-center">
                        <i className="fa-regular fa-building fa-lg text-[#c5a47e]"></i>
                    </div>
                    <div className="">
                        <span className="secondary-text text-[#999]">Jl. Cut Nyak Dien No. 80 Kelurahan Regol Wetan Kec. Sumedang Selatan Kab. Sumedang</span>
                    </div>
                </div>
                <div className="grid grid-cols-[30px_1fr] gap-4 mt-3">
                    <div className="w-5 text-center">
                        <i className="fa-solid fa-phone fa-lg text-[#c5a47e]"></i>
                    </div>
                    <div className="">
                        <span className="secondary-text text-[#999]">082118454801</span>
                    </div>
                </div>
                <div className="grid grid-cols-[30px_1fr] gap-4 mt-3">
                    <div className="w-5 text-center">
                        <i className="fa-solid fa-envelopes-bulk fa-lg text-[#c5a47e]"></i>
                    </div>
                    <div className="">
                        <span className="secondary-text text-[#999]">pubdokphotography@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="px-8 mt-6">
                <span className="uppercase text-[#c5a47e]">Social media</span>
                <div className="grid grid-cols-4 mt-6 text-[#c5a47e] lg:grid-cols-1 lg:gap-4">
                    <div>
                        <i className="fa-brands fa-instagram fa-xl"></i>
                        <span className="hidden secondary-text text-[#999] ml-2 sm:inline lg:ml-4">instagram</span>
                    </div>
                    <div>
                        <i class="fa-brands fa-facebook fa-xl"></i>
                        <span className="hidden secondary-text text-[#999] ml-2 sm:inline lg:ml-4">facebook</span>
                    </div>
                    <div>
                        <i className="fa-brands fa-youtube fa-xl"></i>
                        <span className="hidden secondary-text text-[#999] ml-2 sm:inline lg:ml-4">youtube</span>
                    </div>
                    <div>
                        <i className="fa-brands fa-pinterest fa-xl"></i>
                        <span className="hidden secondary-text text-[#999] ml-2 sm:inline lg:ml-4">pinterest</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer