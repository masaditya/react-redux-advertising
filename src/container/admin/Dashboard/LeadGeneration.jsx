import React from 'react'

export const LeadGeneration = () => {
    return (
        <div className="bg-white p-0 rounded shadow">
            <div className="row py-4 px-5 fz-1">
                <span className="mr-0 ml-auto pt-1 pr-4">Period</span>
                <select className="form-control fz-1 w-25 " name="dropdown">
                    <option>Yesterday</option>
                    <option>Default selected</option>
                    <option>Default select</option>
                </select>
            </div>
            <table className="table fz-1">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0 w-30 pl-4">Title of Upload File</th>
                        <th scope="col" className="border-0 text-center">Type</th>
                        <th scope="col" className="border-0 text-center">Click</th>
                        <th scope="col" className="border-0 text-center">Lead</th>
                        <th scope="col" className="border-0 text-center">Posted Date</th>
                        <th scope="col" className="border-0">Download Lead</th>
                    </tr>
                </thead>
                <tbody>
                    {/*?php foreach ($post as $lg) { ?*/}
                    <tr>
                        {/* <th scope="row">1</th> */}
                        <td scope="row" className="pl-4">
                            <a >{/*?php echo $lg-*/}title; ?&gt;</a>
                        </td>
                        <td className="text-center">eBook</td>
                        <td className="text-center">10</td>
                        <td className="text-center">0.01</td>
                        <td className="text-center">{/*?php echo date('d F Y', strtotime($lg-*/}created_at));  ?&gt;</td>
                        <td><a >Download</a></td>
                    </tr>
                    {/*?php } ?*/}
                </tbody>
            </table>
            <div className="w-100 text-center py-5">
                <button className="btn btn-outline-primary btn-rounded fz-1 px-4">
                    View More
                </button>
            </div>
        </div>
    )
}
