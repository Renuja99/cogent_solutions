export default function PricingTables() {
  return (
    <section className="relative bg-gray-900 border-t border-transparent dark:border-gray-800">
      {/* Background gradient (dark version only) */}
      <div className="absolute inset-0 opacity-25 bg-gradient-to-b from-gray-800 to-gray-900 pointer-events-none hidden dark:block" aria-hidden="true"></div>
      {/* End background gradient (dark version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-red-hat-display mb-4 text-gray-100">Corporate Tax in the UAE</h2>
            <p className="text-xl text-gray-400">On 31 January 2022, the tax landscape of the region shifted yet again with the United Arab Emirates (UAE), Ministry of Finance (MoF) making the breakthrough announcement that a new federal corporate tax (CT) system will be implemented in the UAE, effective financial years commencing on or after 1 June 2023. Barring Bahrain, the UAE has introduced the lowest corporate income tax rate within the GCC region at a standard rate of 9%.</p>
          </div>

          {/* Pricing tables */}
          <div className="max-w-xs mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">

            {/* Pricing table 1 */}
            <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow border-2 border-transparent dark:border-teal-500" data-aos="fade-down">
              <div className="grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">Ten key questions for the board</div>
                  <div className="inline-flex px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-200 dark:bg-teal-600 dark:bg-opacity-25 rounded-full">-40%</div>
                </div>

                <div className="text-gray-500 dark:text-gray-400">— Lorem ipsum dolor amet sit consect adipiscing.</div>
              </div>
              <div className="mt-24">
                <a className="btn-sm text-white bg-teal-500 hover:bg-teal-400 w-full" href="#0">Read more</a>
              </div>
            </div>

            {/* Pricing table 2 */}
            <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow" data-aos="fade-down" data-aos-delay="150">
              <div className="grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">Exempt income</div>
                </div>

                <div className="text-gray-500 dark:text-gray-400">Businesses operating in the extraction of natural resources. These will continue to be subject to the tax decrees issued by the respective Emirate
                  Individuals earning income in their personal capacity (i.e. salary, investment income) as long as the income generating activity does not require a commercial license
                  Businesses registered in Free Trade Zones, provided they comply with all the regulatory requirements, and that do not conduct business with Mainland UAE</div>
              </div>
              <div className="mt-24">
                <a className="btn-sm text-white bg-purple-500 hover:bg-purple-400 dark:text-teal-400 dark:bg-gray-700 dark:hover:bg-gray-600 w-full" href="#0">Read more</a>
              </div>
            </div>

            {/* Pricing table 3 */}
            <div className="flex flex-col h-full p-6 bg-white dark:bg-gray-800 shadow" data-aos="fade-down" data-aos-delay="300">
              <div className="grow mb-4 pb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-xl font-bold font-red-hat-display">In brief</div>
                </div>

                <div className="text-gray-500 dark:text-gray-400">In the past few years, the UAE experienced significant tax changes with a view to streamline its tax system and bring it in line with international best practices, whilst also diversifying its state revenue. Starting with the implementation of Value Added Tax (VAT) in January 2018, followed by the introduction of economic substance rules (ESR) as well as </div>
              </div>
              <div className="mt-24">
                <a className="btn-sm text-white bg-purple-500 hover:bg-purple-400 dark:text-teal-400 dark:bg-gray-700 dark:hover:bg-gray-600 w-full" href="#0">Read more</a>
              </div>
            </div>

            {/* Pricing features */}


          </div>

        </div>
      </div>
    </section>
  )
}