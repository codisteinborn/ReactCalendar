if (props.month === 'Sept' || props.month === 'Apr' || props.month === 'Jun' || props.month === 'Nov'){
    numDays = 30
}
else if (props.month === 'Feb'){
    numDays = 28
}
else {
    numDays = 31
}

const MonthCal = props => (
    props.jumboView ?
        <div>
            <Jumbo jumboHide={props.jumboHide} />
            <div>
                <Col xs={12} sm={12} md={12}>
                    {props.prodArr.map(elem => <ProdPrev category={elem.category} name={elem.name} price={elem.price} key={elem._id} image={elem.image} clicker={props.clicker} id={elem._id}/>)}
                </Col>
            </div>
        </div> :
        <div>
        <Col xs={12} sm={12} md={12}>
            {props.prodArr.map(elem => <ProdPrev category={elem.category} name={elem.name} price={elem.price} key={elem._id} image={elem.image} clicker={props.clicker} id={elem._id}/>)}
        </Col>
    </div>
);


export default MonthCal;