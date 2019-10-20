// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    action: cc.ActionInterval;

   

    // LIFE-CYCLE CALLBACKS:

   
    onCollisionEnter(other,self)
    {
        if(other.tag == 2)
        {
            this.node.destroy();
            this.node.parent.getComponent('Game').addScore();
        }
        if(other.tag == 1)
        {
            cc.director.loadScene("Game");
        }
    }
    moveToPlayer()
    {
        var moveAction = cc.moveTo(3,this.node.parent.getChildByName('soldier1').position.x,this.node.parent.getChildByName('soldier1').position.y);
        return moveAction;
    }
    onLoad () {
        this.action = this.moveToPlayer();
        this.node.runAction(this.action);

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        
        cc.director.preloadScene("Game");
    }
    start () {

    }

    // update (dt) {}
}
