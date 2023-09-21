<?xml version="1.0"?>
<tileset version="1.5" tiledversion="2021.03.23" name="tileset" tilewidth="8" tileheight="8" tilecount="101" columns="32">
  <properties>
    <property name="world.gamesName" value="Test level"/>
    <property name="world.endingMessage" value="Thx for playing!"/>
    <property name="world.effects" value=""/>
    <property name="world.backgroundColor" value="000000"/>
    <property name="world.textColor" value="ffffff"/>
    <property name="player.groundAcceleration" type="float" value="0.8"/>
    <property name="player.air_acceleration" type="float" value="0.8"/>
    <property name="player.maxSpeed" type="float" value="3.2"/>
    <property name="player.groundFriction" type="float" value="0.65"/>
    <property name="player.air_friction" type="float" value="0.75"/>
    <property name="player.jumpSpeed" type="float" value="0.44"/>
    <property name="player.maxFallSpeed" type="float" value="16"/>
    <property name="player.maxJumpFrames" type="float" value="18"/>
    <property name="player.jumpChecked" type="bool" value="true"/>
    <property name="player.wallJumpChecked" type="bool" value="true"/>
    <property name="player.doubleJumpChecked" type="bool" value="false"/>
    <property name="player.dashChecked" type="bool" value="false"/>
    <property name="player.runChecked" type="bool" value="false"/>
  </properties>
  <image source="spritesheet.png" width="256" height="32"/>
  <tile id="0">
    <properties>
      <property name="key" value="TILE_1"/>
      <property name="name" type="float" value="1"/>
      <property name="descriptiveName" value="Left top"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="1">
    <properties>
      <property name="key" value="TILE_2"/>
      <property name="name" type="float" value="2"/>
      <property name="descriptiveName" value="Middle top"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="2">
    <properties>
      <property name="key" value="TILE_3"/>
      <property name="name" type="float" value="3"/>
      <property name="descriptiveName" value="Right top"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="3">
    <properties>
      <property name="key" value="TILE_4"/>
      <property name="name" type="float" value="4"/>
      <property name="descriptiveName" value="Left"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="4">
    <properties>
      <property name="key" value="TILE_6"/>
      <property name="name" type="float" value="6"/>
      <property name="descriptiveName" value="Middle"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="5">
    <properties>
      <property name="key" value="TILE_7"/>
      <property name="name" type="float" value="7"/>
      <property name="descriptiveName" value="Right"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="6">
    <properties>
      <property name="key" value="TILE_8"/>
      <property name="name" type="float" value="8"/>
      <property name="descriptiveName" value="Left bottom"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="7">
    <properties>
      <property name="key" value="TILE_9"/>
      <property name="name" type="float" value="9"/>
      <property name="descriptiveName" value="Middle bottom"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="8">
    <properties>
      <property name="key" value="TILE_10"/>
      <property name="name" type="float" value="10"/>
      <property name="descriptiveName" value="Right bottom"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="9">
    <properties>
      <property name="key" value="TILE_11"/>
      <property name="name" type="float" value="15"/>
      <property name="descriptiveName" value="Top and bottom"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="10">
    <properties>
      <property name="key" value="TILE_12"/>
      <property name="name" type="float" value="16"/>
      <property name="descriptiveName" value="Left and right"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="11">
    <properties>
      <property name="key" value="TILE_13"/>
      <property name="name" type="float" value="17"/>
      <property name="descriptiveName" value="All sides"/>
      <property name="description" value="Just a solid block. &lt;br/&gt;&lt;br/&gt; Hold CTRL in game screen to draw bigger areas."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="12">
    <properties>
      <property name="key" value="TILE_5"/>
      <property name="name" type="float" value="5"/>
      <property name="descriptiveName" value="One way block"/>
      <property name="description" value="The player can jump through it, but will land on it when he falls"/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="13">
    <properties>
      <property name="key" value="TILE_edge"/>
      <property name="name" value="edge"/>
      <property name="descriptiveName" value="Edge block"/>
      <property name="description" value="Will display on the edge of the game screen"/>
    </properties>
  </tile>
  <tile id="14">
    <properties>
      <property name="key" value="PLAYER_IDLE_SPRITE"/>
      <property name="name" value="playerIdle"/>
      <property name="descriptiveName" value="Player idle"/>
      <property name="description" value="The player sprite that is shown when you are not moving."/>
      <property name="directions" value="right,left"/>
    </properties>
  </tile>
  <tile id="15">
    <properties>
      <property name="key" value="PLAYER_JUMP_SPRITE"/>
      <property name="name" value="playerJump"/>
      <property name="descriptiveName" value="Player jump"/>
      <property name="description" value="The player sprite that is shown when you are jumping.&lt;br/&gt;&lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'SFX 1'} }, true)&quot;&gt;Jump SFX&lt;/span&gt; will be displayed underneath."/>
      <property name="squishAble" type="bool" value="true"/>
      <property name="directions" value="right,left"/>
    </properties>
  </tile>
  <tile id="16">
    <properties>
      <property name="key" value="PLAYER_WALL_JUMP_SPRITE"/>
      <property name="descriptiveName" value="Player wall jump"/>
      <property name="description" value="The player sprite that is shown when you are jumping."/>
      <property name="squishAble" type="bool" value="false"/>
      <property name="hiddenEverywhere" type="bool" value="true"/>
      <property name="directions" value="right,left"/>
    </properties>
  </tile>
  <tile id="17">
    <properties>
      <property name="key" value="PLAYER_WALK_SPRITE"/>
      <property name="name" value="playerWalk"/>
      <property name="descriptiveName" value="Player walk"/>
      <property name="description" value="The player sprite that is shown when you are running."/>
      <property name="directions" value="right,left"/>
    </properties>
  </tile>
  <tile id="19">
    <properties>
      <property name="key" value="START_FLAG_SPRITE"/>
      <property name="name" value="startFlag"/>
      <property name="descriptiveName" value="Start flag"/>
      <property name="description" value="The starting point of a level. You also respawn here, if you die. &lt;br/&gt; If you create multiple start-flags, for non-linear games, you can click on a set start flag again, to declare it as the default start of a level."/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="20">
    <properties>
      <property name="key" value="CHECKPOINT_FLAG"/>
      <property name="name" value="checkpoint"/>
      <property name="descriptiveName" value="Checkpoint"/>
      <property name="description" value="If the player touches the checkpoint, he will respawn here after a death. If there are multiple checkpoints, the latest one the player touched will become the respawn point."/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="22">
    <properties>
      <property name="key" value="FINISH_FLAG_SPRITE"/>
      <property name="name" value="finishFlag"/>
      <property name="descriptiveName" value="Finish flag"/>
      <property name="changeableAttributes" value="[object Object]"/>
      <property name="description" value="The goal of a level. If you touch it, by default you continue to the next level. If you want to specify a custom exit to a different level, click on a set finish flag again. &lt;br/&gt;&lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Finish flag closed'} }, true)&quot;&gt;Closed finish flag sprite&lt;/span&gt;"/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="23">
    <properties>
      <property name="key" value="FINISH_FLAG_CLOSED_SPRITE"/>
      <property name="name" value="finishFlagClosed"/>
      <property name="descriptiveName" value="Finish flag closed"/>
      <property name="description" value="This sprite will be displayed if the player needs to collect collectibles to access the &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Finish flag'} }, true)&quot;&gt;Finish flag&lt;/span&gt; (Can be configured by clicking on a set finish flag in the game screen)."/>
      <property name="hiddenSprite" type="bool" value="true"/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="24">
    <properties>
      <property name="key" value="SPIKE_SPRITE"/>
      <property name="name" value="spike"/>
      <property name="descriptiveName" value="Spike"/>
      <property name="directions" value="bottom,left,top,right"/>
      <property name="description" value="A spike. If you touch it, you die"/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="25">
    <properties>
      <property name="key" value="TRAMPOLINE_SRPITE"/>
      <property name="name" value="trampoline"/>
      <property name="descriptiveName" value="Trampoline"/>
      <property name="description" value="A trampoline. You will jump approximately twice as high when you land on it."/>
      <property name="animNotEditale" type="bool" value="true"/>
      <property name="squishAble" type="bool" value="false"/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="27">
    <properties>
      <property name="key" value="CANON_SPRITE"/>
      <property name="name" value="canon"/>
      <property name="changeableAttributes" value="[object Object],[object Object]"/>
      <property name="descriptiveName" value="Cannon"/>
      <property name="description" value="A cannon. It shoots &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Cannon ball'} }, true)&quot;&gt;cannonballs&lt;/span&gt; at certain time intervals. Click on it after placing it again, to change the attributes of the individual cannon."/>
      <property name="type" value="objects"/>
      <property name="squishAble" type="bool" value="false"/>
      <property name="directions" value="left,top,right,bottom"/>
    </properties>
  </tile>
  <tile id="28">
    <properties>
      <property name="key" value="STOMPER"/>
      <property name="name" value="stomper"/>
      <property name="type" value="objects"/>
      <property name="descriptiveName" value="Stomper"/>
      <property name="squishAble" type="bool" value="false"/>
      <property name="directions" value="bottom,left,top,right"/>
      <property name="description" value="A deadly hazard, that will fly torwards the player, if he is in it's way and move back to it's initial place once it hits a solid block. Can be rotated by clicking on a placed object again."/>
    </properties>
  </tile>
  <tile id="29">
    <properties>
      <property name="key" value="TOGGLE_MINE"/>
      <property name="name" value="toggleMine"/>
      <property name="type" value="objects"/>
      <property name="descriptiveName" value="Toggle mine"/>
      <property name="description" value="An object that is harmless at first, but once you step in and out of it, it becomes deadly."/>
    </properties>
  </tile>
  <tile id="31">
    <properties>
      <property name="key" value="DISAPPEARING_BLOCK_SPRITE"/>
      <property name="name" value="disappearingBlock"/>
      <property name="descriptiveName" value="Disappearing block"/>
      <property name="description" value="A block that will disappear upon touching it. It will reappear after a certain time."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="32">
    <properties>
      <property name="key" value="WATER"/>
      <property name="name" value="water"/>
      <property name="descriptiveName" value="Water"/>
      <property name="description" value="A passable block that slows down gravity and let's you jump infinitely inside it. Every object can be placed on it."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="34">
    <properties>
      <property name="key" value="RED_BLOCK"/>
      <property name="name" value="redBlock"/>
      <property name="descriptiveName" value="Red block"/>
      <property name="description" value="There are red blocks and blue blocks. Only one them can be active at a time. By touching the switch (in the objects tab), the active tiles can be switched."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="36">
    <properties>
      <property name="key" value="BLUE_BLOCK"/>
      <property name="name" value="blueBlock"/>
      <property name="descriptiveName" value="Blue block"/>
      <property name="description" value="There are red blocks and blue blocks. Only one them can be active at a time. By touching the switch (in the objects tab), the active tiles can be switched."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="38">
    <properties>
      <property name="key" value="RED_BLUE_BLOCK_SWITCH"/>
      <property name="name" value="redblueblockswitch"/>
      <property name="descriptiveName" value="Red/blue switch"/>
      <property name="description" value="A switch for red/blue tiles. Can be activated by hitting it with your head, or if a stomper/cannon-ball/rocket hits it."/>
      <property name="type" value="tiles"/>
      <property name="squishAble" type="bool" value="false"/>
      <property name="animNotEditale" type="bool" value="true"/>
    </properties>
  </tile>
  <tile id="40">
    <properties>
      <property name="key" value="TREADMILL"/>
      <property name="name" value="treadmill"/>
      <property name="descriptiveName" value="Treadmill"/>
      <property name="description" value="It will move the player in a certain direction when he stands on it. Click on a set treadmill again to change it's direction. (Or press shift before placing it)"/>
      <property name="type" value="tiles"/>
      <property name="directions" value="right,left"/>
    </properties>
  </tile>
  <tile id="42">
    <properties>
      <property name="key" value="ICE_BLOCK"/>
      <property name="name" value="iceBlock"/>
      <property name="descriptiveName" value="Ice block"/>
      <property name="description" value="It's slippery. The player can't stick to it if walljump is active."/>
      <property name="type" value="tiles"/>
    </properties>
  </tile>
  <tile id="43">
    <properties>
      <property name="key" value="ROCKET_LAUNCHER"/>
      <property name="name" value="rocketLauncher"/>
      <property name="type" value="objects"/>
      <property name="descriptiveName" value="Rocket launcher"/>
      <property name="changeableAttributes" value="[object Object],[object Object],[object Object]"/>
      <property name="squishAble" type="bool" value="false"/>
      <property name="rotateable" type="bool" value="true"/>
      <property name="description" value="A rocket-launcher. It shoots &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Rocket'} }, true)&quot;&gt;rockets&lt;/span&gt; at certain time intervals that will follow the player. Click on it after placing it again, to change the attributes of the individual cannon."/>
    </properties>
  </tile>
  <tile id="44">
    <properties>
      <property name="key" value="NPC_SPRITE"/>
      <property name="name" value="npc"/>
      <property name="changeableAttributes" value="[object Object]"/>
      <property name="descriptiveName" value="Npc"/>
      <property name="description" value="An object that can display a dialogue. Click on it again after placing it, to display the dialogue window."/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="45">
    <properties>
      <property name="key" value="CANON_BALL_SPRITE"/>
      <property name="name" value="canonBall"/>
      <property name="descriptiveName" value="Cannon ball"/>
      <property name="directions" value="left,top,right,bottom"/>
      <property name="description" value="A cannonball. The &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Cannon'} }, true)&quot;&gt;cannon&lt;/span&gt; shoots it. &lt;br/&gt;When it hits a wall, &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'SFX 2'} }, true)&quot;&gt;explosion&lt;/span&gt; will be displayed."/>
    </properties>
  </tile>
  <tile id="46">
    <properties>
      <property name="key" value="ROCKET"/>
      <property name="name" value="rocket"/>
      <property name="descriptiveName" value="Rocket"/>
      <property name="description" value="A rocket. The &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Rocket launcher'} }, true)&quot;&gt;rocket launcher&lt;/span&gt; shoots it.&lt;br/&gt;When it hits a wall, &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'SFX 2'} }, true)&quot;&gt;explosion&lt;/span&gt; will be displayed."/>
    </properties>
  </tile>
  <tile id="48">
    <properties>
      <property name="key" value="PORTAL"/>
      <property name="name" value="portal"/>
      <property name="type" value="objects"/>
      <property name="descriptiveName" value="Portal"/>
      <property name="squishAble" type="bool" value="false"/>
      <property name="description" value="&lt;b&gt;Second Sprite:&lt;/b&gt; &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Portal 2'} }, true)&quot;&gt;Here&lt;/span&gt;&lt;br/&gt;&lt;br/&gt;A portal with 2 exits. &lt;br/&gt;Just draw 2 portals on the game screen. The odd one will automatically be the first, the even one the second."/>
    </properties>
  </tile>
  <tile id="49">
    <properties>
      <property name="key" value="PORTAL2"/>
      <property name="name" value="portal2"/>
      <property name="type" value="objects"/>
      <property name="descriptiveName" value="Portal 2"/>
      <property name="description" value="&lt;b&gt;First Sprite:&lt;/b&gt; &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Portal'} }, true)&quot;&gt;Here&lt;/span&gt;&lt;br/&gt;&lt;br/&gt;A portal with 2 exits. &lt;br/&gt;Just draw 2 portals on the game screen. The odd one will automatically be the first, the even one the second."/>
      <property name="squishAble" type="bool" value="false"/>
      <property name="hiddenSprite" type="bool" value="true"/>
    </properties>
  </tile>
  <tile id="50">
    <properties>
      <property name="key" value="COLLECTIBLE"/>
      <property name="name" value="collectible"/>
      <property name="type" value="objects"/>
      <property name="descriptiveName" value="Collectible"/>
      <property name="description" value="They can be placed to give the player an additional challenge. &lt;br/&gt; Inside the tool, the collectibles will reappear if you die or reset the level, in the exported game they are gone forever, once &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'SFX 4'} }, true)&quot;&gt;collected&lt;/span&gt;."/>
    </properties>
  </tile>
  <tile id="52">
    <properties>
      <property name="key" value="LASER_CANON"/>
      <property name="name" value="laserCanon"/>
      <property name="changeableAttributes" value="[object Object],[object Object]"/>
      <property name="descriptiveName" value="Laser cannon"/>
      <property name="description" value="A laser cannon. It shoots &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Laser'} }, true)&quot;&gt;lasers&lt;/span&gt; until they hit a wall. Click on it after placing it again, to change the attributes of the individual laser cannon."/>
      <property name="type" value="objects"/>
      <property name="squishAble" type="bool" value="false"/>
      <property name="directions" value="left,top,right,bottom"/>
    </properties>
  </tile>
  <tile id="53">
    <properties>
      <property name="key" value="LASER"/>
      <property name="name" value="laser"/>
      <property name="descriptiveName" value="Laser"/>
      <property name="directions" value="left,top,right,bottom"/>
      <property name="description" value="A laser. The &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Laser cannon'} }, true)&quot;&gt;laser cannon&lt;/span&gt; shoots it. &lt;br/&gt;"/>
    </properties>
  </tile>
  <tile id="55">
    <properties>
      <property name="key" value="BARREL_CANNON"/>
      <property name="name" value="barrelCannon"/>
      <property name="descriptiveName" value="Barrel"/>
      <property name="description" value="A barrel. When the player touches it, he gets inside of it and stays there, until he presses the jump button - then he will be launched out of it in it's direction."/>
      <property name="type" value="objects"/>
      <property name="squishAble" type="bool" value="true"/>
      <property name="directions" value="left,top,right,bottom"/>
    </properties>
  </tile>
  <tile id="56">
    <properties>
      <property name="key" value="JUMP_RESET"/>
      <property name="name" value="jumpReset"/>
      <property name="descriptiveName" value="Jump reset"/>
      <property name="description" value="It resets your jump in air. It is deactivated upon touching the ground or wall."/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="57">
    <properties>
      <property name="key" value="FIXED_SPEED_RIGHT"/>
      <property name="name" value="fixedSpeedRight"/>
      <property name="descriptiveName" value="Auto run"/>
      <property name="directions" value="right,left"/>
      <property name="description" value="Activates auto-run mode upon touching. &lt;br/&gt; The auto-run can be stopped by the auto-run stopper tile. &lt;br/&gt; Jumping off a wall will change the run direction. Click on a set object again, to change it's default direction."/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="59">
    <properties>
      <property name="key" value="FIXED_SPEED_STOPPER"/>
      <property name="name" value="fixedSpeedStopper"/>
      <property name="descriptiveName" value="Auto-run stopper"/>
      <property name="description" value="This tile stops the auto-run activated by the &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Auto run'} }, true)&quot;&gt;auto-run sprite&lt;/span&gt;."/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="61">
    <properties>
      <property name="key" value="PATH_SPRITE"/>
      <property name="name" value="pathPoint"/>
      <property name="changeableAttributes" value="[object Object],[object Object],[object Object]"/>
      <property name="directions" value="top,right"/>
      <property name="descriptiveName" value="Path"/>
      <property name="description" value="&lt;div&gt;Draw paths, put objects on top and the objects will follow them. Click on an already set path-point, while paths are selected in build-tools to adjust the path's attributes.&lt;div class='subSection'&gt;&lt;details&gt;&lt;summary&gt;Compatible objects&lt;/summary&gt;&lt;div class='marginTop8'&gt;&lt;ul style='padding-left: 16px'&gt;&lt;li&gt;Finish flag&lt;/li&gt;&lt;li&gt;Spikes&lt;/li&gt;&lt;li&gt;Trampolines&lt;/li&gt;&lt;li&gt;Toggle mine&lt;/li&gt;&lt;li&gt;Rocket launchers&lt;/li&gt;&lt;li&gt;Portals&lt;/li&gt;&lt;li&gt;Collectibles&lt;/li&gt;&lt;li&gt;Barrel cannons&lt;/li&gt;&lt;li&gt;Jump reset&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;/details&gt;&lt;details class='marginTop8'&gt;&lt;summary&gt;Rules&lt;/summary&gt;&lt;div class='marginTop8'&gt;&lt;ul style='padding-left: 16px'&gt;&lt;li&gt;Draw paths in a line or in an enclosed 'circle'&lt;/li&gt;&lt;li&gt;Place as many different objects on them as you want&lt;/li&gt;&lt;li&gt;You can't draw 2 paths above or beside each other. You need to leave 1 free space inbetween&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;/details&gt;&lt;/div&gt;&lt;/div&gt;"/>
      <property name="type" value="objects"/>
    </properties>
  </tile>
  <tile id="62">
    <properties>
      <property name="key" value="DEKO_SPRITE"/>
      <property name="name" value="deco"/>
      <property name="type" value="deco"/>
      <property name="descriptiveName" value="Deco 1"/>
    </properties>
  </tile>
  <tile id="63">
    <properties>
      <property name="key" value="DEKO_SPRITE2"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 2"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="64">
    <properties>
      <property name="key" value="DEKO_SPRITE3"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 3"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="65">
    <properties>
      <property name="key" value="DEKO_SPRITE4"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 4"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="66">
    <properties>
      <property name="key" value="DEKO_SPRITE5"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 5"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="67">
    <properties>
      <property name="key" value="DEKO_SPRITE6"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 6"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="68">
    <properties>
      <property name="key" value="DEKO_SPRITE7"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 7"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="69">
    <properties>
      <property name="key" value="DEKO_SPRITE8"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 8"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="70">
    <properties>
      <property name="key" value="DEKO_SPRITE9"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 9"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="72">
    <properties>
      <property name="key" value="DEKO_SPRITE10"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 10"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="73">
    <properties>
      <property name="key" value="DEKO_SPRITE11"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 11"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="75">
    <properties>
      <property name="key" value="DEKO_SPRITE12"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 12"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="77">
    <properties>
      <property name="key" value="DEKO_SPRITE13"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 13"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="78">
    <properties>
      <property name="key" value="DEKO_SPRITE14"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 14"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="79">
    <properties>
      <property name="key" value="DEKO_SPRITE15"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 15"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="81">
    <properties>
      <property name="key" value="DEKO_SPRITE16"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 16"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="83">
    <properties>
      <property name="key" value="DEKO_SPRITE17"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 17"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="84">
    <properties>
      <property name="key" value="DEKO_SPRITE18"/>
      <property name="name" value="deco"/>
      <property name="descriptiveName" value="Deco 18"/>
      <property name="type" value="deco"/>
    </properties>
  </tile>
  <tile id="86">
    <properties>
      <property name="key" value="SFX1"/>
      <property name="name" value="sfx"/>
      <property name="directions" value="bottom,left,top,right"/>
      <property name="descriptiveName" value="SFX 1"/>
      <property name="description" value="SFX that shows when the &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Player jump'} }, true)&quot;&gt;player jumps&lt;/span&gt;."/>
    </properties>
  </tile>
  <tile id="88">
    <properties>
      <property name="key" value="SFX2"/>
      <property name="name" value="sfx"/>
      <property name="descriptiveName" value="SFX 2"/>
      <property name="description" value="SFX when &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Cannon ball'} }, true)&quot;&gt;cannon ball&lt;/span&gt; or &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Rocket'} }, true)&quot;&gt;rocket&lt;/span&gt; hit a wall."/>
    </properties>
  </tile>
  <tile id="90">
    <properties>
      <property name="key" value="SFX3"/>
      <property name="name" value="sfx"/>
      <property name="descriptiveName" value="SFX 3"/>
      <property name="description" value="SFX when player dashes"/>
    </properties>
  </tile>
  <tile id="92">
    <properties>
      <property name="key" value="SFX4"/>
      <property name="name" value="sfx"/>
      <property name="descriptiveName" value="Build SFX"/>
      <property name="hiddenEverywhere" type="bool" value="true"/>
      <property name="description" value="SFX when an object is placed in build mode"/>
    </properties>
  </tile>
  <tile id="93">
    <properties>
      <property name="key" value="SFX5"/>
      <property name="name" value="sfx"/>
      <property name="descriptiveName" value="SFX 4"/>
      <property name="description" value="Plays when the player touches a &lt;span class='textAsLink' onclick=&quot;DrawSectionHandler.changeSelectedSprite({ target: { value:  'Collectible'} }, true)&quot;&gt;collectible&lt;/span&gt;."/>
    </properties>
  </tile>
  <tile id="95">
    <properties>
      <property name="key" value="SFX6"/>
      <property name="name" value="sfx"/>
      <property name="descriptiveName" value="SFX 5"/>
      <property name="description" value="Used for shaders"/>
    </properties>
  </tile>
  <tile id="96">
    <properties>
      <property name="key" value="SFX7"/>
      <property name="name" value="sfx"/>
      <property name="descriptiveName" value="SFX 6"/>
      <property name="description" value="Used for shaders"/>
    </properties>
  </tile>
  <tile id="97">
    <properties>
      <property name="key" value="SFX8"/>
      <property name="name" value="sfx"/>
      <property name="descriptiveName" value="SFX 7"/>
      <property name="description" value="Used for shaders"/>
    </properties>
  </tile>
  <tile id="99">
    <properties>
      <property name="key" value="SFX9"/>
      <property name="name" value="sfx"/>
      <property name="descriptiveName" value="SFX 8"/>
      <property name="description" value="Will be displayed behind the player, if the player is in auto-run mode."/>
    </properties>
  </tile>
</tileset>