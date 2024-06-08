function test(click: boolean) {
  console.log(click);
}

export default function XCOne() {
    return (
      <>
        <table className="border-solid border-2 border-black">
          <tr onClick={() => test(true)} className="">
            <th className="border-solid border-2 border-black">test</th>
            <th className="border-solid border-2 border-black">test</th>
            <th className="border-solid border-2 border-black">test</th>
          </tr>
        </table>
      </>
    );
}