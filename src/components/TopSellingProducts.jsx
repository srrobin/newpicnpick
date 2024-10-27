import CardCase from "./CardCase";
import TopSellingCard from "./TopSellingCard";

const TopSellingProducts = () => {
    return (
        <div className='gap-20 '> 
        <CardCase cardTitle='Top Selling Products' cardBtntext="show all" cardBtnLink="/">
             <div className='d-flex  flex-wrap topselling__product'>
                 <TopSellingCard/>
                 <TopSellingCard/>
                 <TopSellingCard/>
                 <TopSellingCard/>
                 <TopSellingCard/>
                 <TopSellingCard/>
                 <TopSellingCard/>
                 <TopSellingCard/>
                 <TopSellingCard/>
             </div>
        </CardCase>
        </div>

    );
};

export default TopSellingProducts;