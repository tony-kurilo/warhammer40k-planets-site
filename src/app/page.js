"use client"

import "./styles/terminal.css"
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()

    useEffect(()=> {
        let TerminalEmulator = {
            init: function(screen) {
                let inst = Object.create(this);
                inst.screen = screen;
                inst.createInput();

                return inst;
            },

            createInput: function() {
                let inputField = document.createElement('div');
                let inputWrap = document.createElement('div');

                inputField.className = 'terminal_emulator__field';
                inputField.innerHTML = '';
                inputWrap.appendChild(inputField);
                this.screen.appendChild(inputWrap);
                this.field = inputField;
                this.fieldwrap = inputWrap;
            },


            enterInput: function(input) {
                return new Promise( (resolve, reject) => {
                    let randomSpeed = (max, min) => {
                        return Math.random() * (max - min) + min;
                    }
                    let speed = randomSpeed(70, 90);
                    let i = 0;
                    let str = '';
                    let type = () => {

                        str = str + input[i];
                        this.field.innerHTML = str.replace(/ /g, '&nbsp;');
                        i++;

                        setTimeout( () => {
                            if( i < input.length){
                                if( i % 5 === 0) speed = randomSpeed(80, 120);
                                type();
                            }else {
                                console.log('tick');
                                setTimeout( () => {
                                    console.log('tock');
                                    resolve();
                                }, 400);

                            }
                        }, speed);
                    };
                    type();
                });
            },

            enterCommand: function() {
                return new Promise( (resolve, reject ) => {
                    let resp = document.createElement('div');
                    resp.className = 'terminal_emulator__command';
                    resp.innerHTML = this.field.innerHTML;
                    this.screen.insertBefore( resp, this.fieldwrap);

                    this.field.innerHTML = '';
                    resolve();
                })
            },

            enterResponse: function(response) {

                return new Promise( (resolve, reject ) => {
                    let resp = document.createElement('div');
                    resp.className = 'terminal_emulator__response';
                    resp.innerHTML = response;
                    this.screen.insertBefore( resp, this.fieldwrap);

                    resolve();
                })
            },

            redirect : function( time, busy ) {
                busy = (busy === undefined ) ? true : busy;
                return new Promise( (resolve, reject) => {
                    if (busy){
                        this.field.classList.add('waiting');
                    } else {
                        this.field.classList.remove('waiting');
                    }
                    setTimeout( () => {
                        resolve();
                        router.push('/search')
                    }, time);
                });
            },

            wait : function( time, busy ) {
                busy = (busy === undefined ) ? true : busy;
                return new Promise( (resolve, reject) => {
                    if (busy){
                        this.field.classList.add('waiting');
                    } else {
                        this.field.classList.remove('waiting');
                    }
                    setTimeout( () => {
                        resolve();
                    }, time);
                });
            },

            reset : function() {
                return new Promise( (resolve, reject) => {
                    this.field.classList.remove('waiting');
                    resolve();
                });
            }

        };

        let TE = TerminalEmulator.init(document.getElementById('screen'));

        TE.wait(1000, false)
            .then(TE.enterInput.bind(TE, 'initialize Archivum Astralis') )
            .then( TE.enterCommand.bind( TE ) )
            .then( TE.enterResponse.bind(TE, 'Initializing Archivum Astralis v1.42...') )
            .then( TE.enterResponse.bind(TE, 'Establishing connection to Omniscope Network...') )
            .then( TE.wait.bind(TE, 2000) )
            .then( TE.enterResponse.bind(TE, '✓ Connection established (secure channel)') )
            .then( TE.wait.bind(TE, 600) )
            .then( TE.enterResponse.bind(TE, '✓ Synchronizing star charts and planetary data') )
            .then( TE.wait.bind(TE, 600) )
            .then( TE.enterResponse.bind(TE, 'Downloading planetary registry...') )
            .then( TE.wait.bind(TE, 300) )
            .then( TE.enterResponse.bind(TE, 'Segment 1/4: Core Worlds... [Completed]') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, 'Segment 2/4: Frontier Colonies... [Completed]') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, 'Segment 3/4: Xenos Worlds...  [Completed]') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, 'Segment 4/4: Forbidden Zones...  [Completed]') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, 'Loading planetary profiles...') )
            .then( TE.wait.bind(TE, 300) )
            .then( TE.enterResponse.bind(TE, ' - 7,483 Human-occupied worlds') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, ' - 1,256 Xenos-classified planets') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, ' - 341 Restricted or Exterminated systems') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, 'Running environmental scan...') )
            .then( TE.wait.bind(TE, 300) )
            .then( TE.enterResponse.bind(TE, ' - Atmosphere: Stable') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, ' - Radiation levels: Within acceptable limits') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, ' - Lifeform activity: Minimal traces detected') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, 'Preparing user interface...') )
            .then( TE.wait.bind(TE, 300) )
            .then( TE.enterResponse.bind(TE, ' - Loading interactive holographic map... ✓') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, ' - Accessing historical records... ✓') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, ' - Activating planetary lexicon... ✓') )
            .then( TE.wait.bind(TE, 700) )
            .then( TE.enterResponse.bind(TE, 'System diagnostics complete. Archivum Astralis is ready.') )
            .then( TE.wait.bind(TE, 300) )
            .then( TE.enterResponse.bind(TE, 'Disclaimer! By using this resource you agree that you have no claims. This site is a fan product. (y/n) ') )
            .then( TE.wait.bind(TE, 2000, false) )
            .then( TE.enterInput.bind(TE, 'y') )
            .then( TE.wait.bind(TE, 400) )
            .then( TE.enterCommand.bind( TE ) )
            .then( TE.enterResponse.bind(TE, 'Opening service...') )
            .then(TE.redirect.bind(TE, 2000))
    }, []);
  return (
    <div className={"screen uppercase "}>
        <div id="screen" className="terminal_emulator">
        </div>
    </div>
  );
}
