'use client'
import {Suspense, useEffect, useState} from "react";
import Image from "next/image";
import '../../../styles/planet_page.css';

export default function Layout({planets_data}) {
    const [activeButton, setActiveButton] = useState(planets_data[0] ? `${planets_data[0].id}-descr` : null);
    const [activeContent, setActiveContent] = useState(null);

    useEffect(() => {
        if (planets_data[0]) {
            const formattedContent = planets_data[0].description.split('\n').map((line, index) => (
                <p key={index} className="my-4">{line}</p>
            ));
            setActiveContent(formattedContent);
        }
    }, [planets_data]);

    const handleButtonClick = (content, eventId) => {
        setActiveButton(eventId);
        setActiveContent(content.split('\n').map((line, index) => (
            <p key={index} className="my-4">{line}</p>
        )));
    };

    return (
        <Suspense fallback={<div className={'text-primary-text-color'}>Loading data...</div>}>
            <div>
                <div className="text-primary-text-color">
                    <p className={"mt-2"}></p>
                    <a href={"/search"} className={'m-2 mt-2 back-to-search'}>/back-to-search</a>
                    {planets_data.map((planet) => {
                        let imageUrl = planet.image.trimEnd();
                        return (
                            <div key={planet.id} className={''}>
                                <div className={'planet-info-container'}>
                                    <div className={'planet-info space-x-6 space-y-6'}>
                                        <div>
                                            <Image
                                                src={imageUrl}
                                                layout="responsive"
                                                className="responsive-image"
                                                width={1}
                                                height={1} // Пример пропорций
                                                alt={planet.name}/>
                                        </div>
                                        <div className={"info-row"}>
                                            <div>
                                                <h2>Planet Name </h2>
                                                <h1>{planet.name}</h1>
                                            </div>
                                            <div>
                                                <h2>Segmentum </h2>
                                                <h1>{planet.segmentum}</h1>
                                            </div>
                                            <div>
                                                <h2>Orbital Radius </h2>
                                                <h1>{planet.orbit}</h1>
                                            </div>
                                            <div>
                                                <h2>Sector </h2>
                                                <h1>{planet.sector}</h1>
                                            </div>
                                            <div>
                                                <h2>Sub-Sector </h2>
                                                <h1>{planet.subsector}</h1>
                                            </div>
                                            <div>
                                                <h2>System </h2>
                                                <h1>{planet.system}</h1>
                                            </div>
                                            <div>
                                                <h2>Affiliation </h2>
                                                <h1>{planet.affiliation}</h1>
                                            </div>
                                            <div>
                                                <h2>Population </h2>
                                                <h1>{planet.population}</h1>
                                            </div>
                                            <div>
                                                <h2>Class </h2>
                                                <h1>{planet.class}</h1>
                                            </div>
                                            <div>
                                                <h2>Tithe Level </h2>
                                                <h1>{planet.tithe_level}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={"flex center-container"}>
                                        <button id={'descr-button'}
                                                className={`event-button ${activeButton === `${planet.id}-descr` ? 'active' : ''}`}
                                                onClick={() => handleButtonClick(planet.description, `${planet.id}-descr`)}>
                                            Description
                                        </button>
                                        {Array.isArray(planet.events) && planet.events.length > 0 && (
                                            <div className="flex">
                                                {planet.events.map((event) => (
                                                    <div key={event.id}>
                                                        <div>
                                                            <button
                                                                className={`event-button ${activeButton === `${planet.id}-event-${event.id}` ? 'active' : ''}`}
                                                                onClick={() => handleButtonClick(`${event.name}: ${event.event}`, `${planet.id}-event-${event.id}`)}>
                                                                {event.date}
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    {/* Отображение активного контента */}
                                    <div className="content-display" key={activeButton}>
                                        {activeContent && (
                                            <div className="content-box">
                                                {activeContent}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Suspense>
    )
}