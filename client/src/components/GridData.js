const GridData = (props) => {
  const { data } = props;
  const header = data?.length > 0 ? Object.keys(data[0]) : [];

  if (!data || data?.length === 0 || !header) {
    return <div>No Data</div>;
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr key={"th"}>
            {header?.map((v, k) => {
              return <th key={`th_${k}`}>{v}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((v, k) => {
            return (
              <tr>
                {header.map((h) => {
                  return (
                    <td key={`td_${k}_${h}`}>
                      {typeof v[h] == "object" ? JSON.stringify(v[h]) : v[h]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GridData;
