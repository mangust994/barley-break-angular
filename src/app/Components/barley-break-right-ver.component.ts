import {
    Component, OnInit
  } from '@angular/core';
import {BarleyBreakRightVerDataService} from "../Data/barley-break-right-ver-data.service";
import {BarleyBreakRightVerService} from "../Services/barley-break-right-ver.service";


@Component({
        selector: 'barley-break-rv',
        templateUrl: "./html/barley-break-right-ver.html",
        styleUrls: ["./styles/barley-break-right-ver.scss"],
        providers: [BarleyBreakRightVerService]
})
export class BarleyBreakRVComponent implements OnInit { 
    public checkReady: boolean = true;
    public dragIconId: number;
    public dropTileId: number;
    public dragIconname: string;

    constructor(public barleyBreakRightVerService: BarleyBreakRightVerService){}

    public onIconDropped(ev) {
        ev.drag.dropFinished();
    }

    ngOnInit(){
        this.barleyBreakRightVerService.InitData();
    }

    ready() {
        this.checkPlayer();
        this.checkReady = false;
        this.barleyBreakRightVerService.sendConnectionId();
    }
    public onEnterHandler(ev, numberPlayer, userName): void {
        let buttons;
        if(numberPlayer == 1)
        {   
            buttons = this.barleyBreakRightVerService.getButtonsPlayerOne();
        }
        else
        {
            buttons = this.barleyBreakRightVerService.getButtonsPlayerTwo();
        }
        this.dropTileId = parseInt(ev.owner.element.nativeElement.id, 10);
        if(userName != this.barleyBreakRightVerService.getThisUserName()){
            return;
        }
        if (this.dragIconId === this.dropTileId) {
            return;
        }
        if (this.dragIconname == ' ') {
            return;
        }
        if(this.dropTileId != buttons.find(x => x.name == ' ').currentPosition)
        {
            return;
        }
        const dragIndex = buttons.findIndex((iconObj) => {
            return iconObj.currentPosition === this.dragIconId;
        });
        const dropIndex = buttons.findIndex((iconObj) => {
            return iconObj.currentPosition === this.dropTileId;
        });
        if(dragIndex + 1 == dropIndex || dragIndex - 1 == dropIndex)
        {
            this.barleyBreakRightVerService.swapIconsHorisontal(dragIndex, dropIndex, numberPlayer);
        }
        else if(dragIndex - 4 == dropIndex)
        {
            this.barleyBreakRightVerService.swapIconsUp(dragIndex, dropIndex, numberPlayer);
        }
        else if(dragIndex + 4 == dropIndex)
        {
            this.barleyBreakRightVerService.swapIconsDown(dragIndex, dropIndex, numberPlayer)
        }
        
    }

    public dragStartHandler(id: string, name: string): void {
        this.dragIconId = parseInt(id, 10)
        this.dragIconname = name;
    }

    public dragEndHandler(dragRef: HTMLElement) {
        this.wincheckPl1();
        this.wincheckPl2(); //fix later
        dragRef.style.visibility = "visible";
    }

    public ghostCreateHandler(dragRef: HTMLElement) {
        dragRef.style.visibility = "hidden";
    }

    wincheckPl1() : boolean {
        let resultCheck = true;
        for(let i = 0; i < this.barleyBreakRightVerService.getButtonsPlayerOne().length; i++)
        {
            if(this.barleyBreakRightVerService.getButtonsPlayerOne()[i].name == this.barleyBreakRightVerService.getWinButtonsPlayerOne()[i].name)
            {
                resultCheck &&= true;
            }
            else
            {
                resultCheck &&= false;
            }
        }
        return resultCheck;
    }

    wincheckPl2() : boolean {
        let resultCheck = true;
        for(let i = 0; i < this.barleyBreakRightVerService.getButtonsPlayerTwo().length; i++)
        {
            if(this.barleyBreakRightVerService.getButtonsPlayerTwo()[i].name == this.barleyBreakRightVerService.getWinButtonsPlayerTwo()[i].name)
            {
                resultCheck &&= true;
            }
            else
            {
                resultCheck &&= false;
            }
        }
        return resultCheck;
    }

    checkAll()
    {
        this.barleyBreakRightVerService.checkConnectionId();
        this.barleyBreakRightVerService.checkButtons();
        this.barleyBreakRightVerService.checkPlayers();
    }
        

    loadGame()
    {
        this.barleyBreakRightVerService.loadGame();
    }

    randCoord() {
        this.barleyBreakRightVerService.randCoord()
    }

    checkPlayer() {
        this.barleyBreakRightVerService.checkPlayer();
    }

    saveGame() {
        this.barleyBreakRightVerService.saveGame();
    }
};
