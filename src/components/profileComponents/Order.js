import React from "react";

export default function Order() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>STATUS</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={"table-success"}>
                        <td>
                            <a href="/" className="link">
                                1
                            </a>
                        </td>
                        <td>Paid</td>
                        <td>June 16 2022</td>
                        <td>$ 234</td>
                    </tr>
                    <tr className={"table-danger"}>
                        <td>
                            <a href="/" className="link">
                                1
                            </a>
                        </td>
                        <td>Not Paid</td>
                        <td>June 16 2022</td>
                        <td>$ 34</td>
                    </tr>
                </tbody>
            </div>
        </div>
    );
}
