import CardCase from "./CardCase";
import TopSellingCard from "./TopSellingCard";

const TopSellingProducts = ({data}) => {
    return (
        <div className='gap-20 '> 
        <CardCase cardTitle='Top Selling Products' cardBtntext="show all" cardBtnLink="/">
             <div className='d-flex  flex-wrap topselling__product'>
                 {
                    data?.product_collections?.map(itm => <TopSellingCard data={itm} key={itm?.id} />)
                 }
             </div>
        </CardCase>
        </div>

    );
};

export default TopSellingProducts;