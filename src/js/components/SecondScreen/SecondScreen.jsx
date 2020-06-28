import React from 'react';
import DescriptionTab from '../DescriptionTab/DescriptionTab';
const data = [
    {
        id: '1',
        tabTitle: "DESCRIPTION",
        tabContent: 'A reference sample of the vehicle designated T-44A. Developed by the Construction Bureau of Plant No. 183. The vehicle entered service on November 23, 1944, but never saw combat. From the end of November 1944 through September 1945, a total of 570 vehicles were produced. A reference sample of the vehicle designated T-44A. Developed by the Construction Bureau of Plant No. 183. The vehicle entered service on November 23, 1944, but never saw combat. From the end of November 1944 through September 1945, a total of 570 vehicles were produced.'
    },
    {
        id: '2',
        tabTitle: "CHARACTERISTIC",
        tabContent: 'Tab Content 2'
    },
    {
        id: '3',
        tabTitle: "Tab 3",
        tabContent: 'Tab Content 3'
    }
]

export default () => {
    const [visibleTab, setVisibleTab] = React.useState(0);

    // const listTitles = props.data.map((item) =>
    //     <li onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>{item.tabTitle}</li>
    // )
    // const listContent = props.data.map((item) =>
    //     <p style={visibleTab === item.id ? {} : { display: 'none' }}>{item.tabContent}</p>
    // )
    // const onChangeSelectedTab = () => {

    // }
    return (
        <section className="page-section" >
            <h2 className="page-title">ABOUT THE TANK</h2>
            <div className="tabs">
                <ul className="tabs-titles">
                    <li onClick={() => setVisibleTab(0)} className={visibleTab === 0 ? "tab-title tab-title--active" : "tab-title"}>DESCRIPTION</li>
                    <li onClick={() => setVisibleTab(1)} className={visibleTab === 1 ? "tab-title tab-title--active" : "tab-title"}>CHARACTERISTIC</li>
                </ul>
                <div className="tab-content">
                    {visibleTab === 0 ? (
                        <DescriptionTab />
                    ) : (
                            <div>aaaaaa</div>
                        )}
                </div>
            </div>
        </section>
    );
}