
function Child(props) {
    return (
        <div>
            <p>from child </p>
            <div>
                <input type="text" onChange={props.handleSearch} value={props.search} placeholder="Search" />
                <ul>
                    {props.data.length > 0 ? (
                        props.data.map((item, index) => (
                            <p key={index}>
                                {item?.FirstName}  {item?.LastName} {item?.Age}  &nbsp;

                                <button onClick={() => props.handleDelete(item)}>Delete</button>
                            </p>
                        ))
                    ) : (
                        <p>No matching data.</p>
                    )}
                </ul>
            </div>
        </div>

    )
}

export default Child;
