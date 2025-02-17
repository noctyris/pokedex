import React from 'react';
import styled from 'styled-components';

const Loader = () => {
	return (
		<StyledWrapper>
			<div id="loading">
				<div className="pokeball" id="normal"></div>
				<div className="pokeball" id="great"></div>
				<div className="pokeball" id="ultra"></div>
				<div className="pokeball" id="master"></div>
				<div className="pokeball" id="safari"></div>
			</div>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`
	@keyframes rotateBall {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	#loading {
		--red: #e20f07;
		--blu: #278de1;
		--ylw: #ffff00;
		--ppl: #481a66;
		--pnk: #eb23aa;
		--brw: #9a4a01;
		--mos: #606700;
		--grn: #5fa300;
		--blk: #000;
		--wht: #FFF;
		--gry: #a5a5a5;
		height: 48px;
		width: 264px;
	}

	.pokeball {
		width: 4px;
		height: 4px;
		transform-origin: 24px 24px;
		animation: rotateBall 1.5s infinite forwards;
		&#normal {
			box-shadow:
			16px 0 0 var(--blk), 20px 0 0 var(--blk), 24px 0 0 var(--blk), 28px 0 0 var(--blk),
			8px 4px 0 var(--blk), 12px 4px 0 var(--blk), 16px 4px 0 var(--red), 20px 4px 0 var(--red), 24px 4px 0 var(--red), 28px 4px 0 var(--red), 32px 4px 0 var(--blk), 36px 4px 0 var(--blk),
			4px 8px 0 var(--blk), 8px 8px 0 var(--red), 12px 8px 0 var(--red), 16px 8px 0 var(--wht), 20px 8px 0 var(--red), 24px 8px 0 var(--red), 28px 8px 0 var(--red), 32px 8px 0 var(--red), 36px 8px 0 var(--red), 40px 8px 0 var(--blk),
			4px 12px 0 var(--blk), 8px 12px 0 var(--red), 12px 12px 0 var(--wht), 16px 12px 0 var(--wht), 20px 12px 0 var(--wht), 24px 12px 0 var(--red), 28px 12px 0 var(--red), 32px 12px 0 var(--red), 36px 12px 0 var(--red), 40px 12px 0 var(--blk),
			0px 16px 0 var(--blk), 4px 16px 0 var(--red), 8px 16px 0 var(--red), 12px 16px 0 var(--red), 16px 16px 0 var(--wht), 20px 16px 0 var(--red), 24px 16px 0 var(--red), 28px 16px 0 var(--red), 32px 16px 0 var(--red), 36px 16px 0 var(--red), 40px 16px 0 var(--red), 44px 16px 0 var(--blk),
			0px 20px 0 var(--blk), 4px 20px 0 var(--red), 8px 20px 0 var(--red), 12px 20px 0 var(--red), 16px 20px 0 var(--red), 20px 20px 0 var(--blk), 24px 20px 0 var(--blk), 28px 20px 0 var(--red), 32px 20px 0 var(--red), 36px 20px 0 var(--red), 40px 20px 0 var(--red), 44px 20px 0 var(--blk),
			0px 24px 0 var(--blk), 4px 24px 0 var(--blk), 8px 24px 0 var(--red), 12px 24px 0 var(--red), 16px 24px 0 var(--blk), 20px 24px 0 var(--wht), 24px 24px 0 var(--gry), 28px 24px 0 var(--blk), 32px 24px 0 var(--red), 36px 24px 0 var(--red), 40px 24px 0 var(--blk), 44px 24px 0 var(--blk),
			0px 28px 0 var(--blk), 4px 28px 0 var(--wht), 8px 28px 0 var(--blk), 12px 28px 0 var(--blk), 16px 28px 0 var(--blk), 20px 28px 0 var(--gry), 24px 28px 0 var(--gry), 28px 28px 0 var(--blk), 32px 28px 0 var(--blk), 36px 28px 0 var(--blk), 40px 28px 0 var(--gry), 44px 28px 0 var(--blk),
			4px 32px 0 var(--blk), 8px 32px 0 var(--wht), 12px 32px 0 var(--wht), 16px 32px 0 var(--wht), 20px 32px 0 var(--blk), 24px 32px 0 var(--blk), 28px 32px 0 var(--gry), 32px 32px 0 var(--gry), 36px 32px 0 var(--gry), 40px 32px 0 var(--blk),
			4px 36px 0 var(--blk), 8px 36px 0 var(--gry), 12px 36px 0 var(--wht), 16px 36px 0 var(--wht), 20px 36px 0 var(--wht), 24px 36px 0 var(--gry), 28px 36px 0 var(--gry), 32px 36px 0 var(--gry), 36px 36px 0 var(--gry), 40px 36px 0 var(--blk),
			8px 40px 0 var(--blk), 12px 40px 0 var(--blk), 16px 40px 0 var(--gry), 20px 40px 0 var(--gry), 24px 40px 0 var(--gry), 28px 40px 0 var(--gry), 32px 40px 0 var(--blk), 36px 40px 0 var(--blk),
			16px 44px 0 var(--blk), 20px 44px 0 var(--blk), 24px 44px 0 var(--blk), 28px 44px 0 var(--blk);
		}
		&#great {
			animation-delay: 0.25s;
			margin: -4px 0 0 54px;
			box-shadow:
				16px 0 0 var(--blk), 20px 0 0 var(--blk), 24px 0 0 var(--blk), 28px 0 0 var(--blk),
				8px 4px 0 var(--blk), 12px 4px 0 var(--blk), 16px 4px 0 var(--blu), 20px 4px 0 var(--blu), 24px 4px 0 var(--blu), 28px 4px 0 var(--blu), 32px 4px 0 var(--blk), 36px 4px 0 var(--blk),
				4px 8px 0 var(--blk), 8px 8px 0 var(--red), 12px 8px 0 var(--red), 16px 8px 0 var(--blu), 20px 8px 0 var(--blu), 24px 8px 0 var(--blu), 28px 8px 0 var(--blu), 32px 8px 0 var(--red), 36px 8px 0 var(--red), 40px 8px 0 var(--blk),
				4px 12px 0 var(--blk), 8px 12px 0 var(--red), 12px 12px 0 var(--red), 16px 12px 0 var(--red), 20px 12px 0 var(--blu), 24px 12px 0 var(--blu), 28px 12px 0 var(--red), 32px 12px 0 var(--red), 36px 12px 0 var(--red), 40px 12px 0 var(--blk),
				0px 16px 0 var(--blk), 4px 16px 0 var(--blu), 8px 16px 0 var(--blu), 12px 16px 0 var(--red), 16px 16px 0 var(--red), 20px 16px 0 var(--blu), 24px 16px 0 var(--blu), 28px 16px 0 var(--red), 32px 16px 0 var(--red), 36px 16px 0 var(--blu), 40px 16px 0 var(--blu), 44px 16px 0 var(--blk),
				0px 20px 0 var(--blk), 4px 20px 0 var(--blu), 8px 20px 0 var(--blu), 12px 20px 0 var(--blu), 16px 20px 0 var(--blu), 20px 20px 0 var(--blk), 24px 20px 0 var(--blk), 28px 20px 0 var(--blu), 32px 20px 0 var(--blu), 36px 20px 0 var(--blu), 40px 20px 0 var(--blu), 44px 20px 0 var(--blk),
				0px 24px 0 var(--blk), 4px 24px 0 var(--blk), 8px 24px 0 var(--blu), 12px 24px 0 var(--blu), 16px 24px 0 var(--blk), 20px 24px 0 var(--wht), 24px 24px 0 var(--gry), 28px 24px 0 var(--blk), 32px 24px 0 var(--blu), 36px 24px 0 var(--blu), 40px 24px 0 var(--blk), 44px 24px 0 var(--blk),
				0px 28px 0 var(--blk), 4px 28px 0 var(--wht), 8px 28px 0 var(--blk), 12px 28px 0 var(--blk), 16px 28px 0 var(--blk), 20px 28px 0 var(--gry), 24px 28px 0 var(--gry), 28px 28px 0 var(--blk), 32px 28px 0 var(--blk), 36px 28px 0 var(--blk), 40px 28px 0 var(--gry), 44px 28px 0 var(--blk),
				4px 32px 0 var(--blk), 8px 32px 0 var(--wht), 12px 32px 0 var(--wht), 16px 32px 0 var(--wht), 20px 32px 0 var(--blk), 24px 32px 0 var(--blk), 28px 32px 0 var(--gry), 32px 32px 0 var(--gry), 36px 32px 0 var(--gry), 40px 32px 0 var(--blk),
				4px 36px 0 var(--blk), 8px 36px 0 var(--gry), 12px 36px 0 var(--wht), 16px 36px 0 var(--wht), 20px 36px 0 var(--wht), 24px 36px 0 var(--gry), 28px 36px 0 var(--gry), 32px 36px 0 var(--gry), 36px 36px 0 var(--gry), 40px 36px 0 var(--blk),
				8px 40px 0 var(--blk), 12px 40px 0 var(--blk), 16px 40px 0 var(--gry), 20px 40px 0 var(--gry), 24px 40px 0 var(--gry), 28px 40px 0 var(--gry), 32px 40px 0 var(--blk), 36px 40px 0 var(--blk),
				16px 44px 0 var(--blk), 20px 44px 0 var(--blk), 24px 44px 0 var(--blk), 28px 44px 0 var(--blk)
			;
		}
		&#ultra {
			animation-delay: 0.5s;
			margin: -4px 0 0 108px;
			box-shadow:
				16px 0 0 var(--blk), 20px 0 0 var(--blk), 24px 0 0 var(--blk), 28px 0 0 var(--blk),
				8px 4px 0 var(--blk), 12px 4px 0 var(--blk), 16px 4px 0 var(--ylw), 20px 4px 0 var(--ylw), 24px 4px 0 var(--ylw), 28px 4px 0 var(--ylw), 32px 4px 0 var(--blk), 36px 4px 0 var(--blk),
				4px 8px 0 var(--blk), 8px 8px 0 var(--ylw), 12px 8px 0 var(--ylw), 16px 8px 0 var(--ylw), 20px 8px 0 var(--ylw), 24px 8px 0 var(--ylw), 28px 8px 0 var(--ylw), 32px 8px 0 var(--ylw), 36px 8px 0 var(--ylw), 40px 8px 0 var(--blk),
				4px 12px 0 var(--blk), 8px 12px 0 var(--ylw), 12px 12px 0 var(--ylw), 16px 12px 0 var(--blk), 20px 12px 0 var(--blk), 24px 12px 0 var(--blk), 28px 12px 0 var(--blk), 32px 12px 0 var(--ylw), 36px 12px 0 var(--ylw), 40px 12px 0 var(--blk),
				0px 16px 0 var(--blk), 4px 16px 0 var(--blk), 8px 16px 0 var(--ylw), 12px 16px 0 var(--ylw), 16px 16px 0 var(--blk), 20px 16px 0 var(--blk), 24px 16px 0 var(--blk), 28px 16px 0 var(--blk), 32px 16px 0 var(--ylw), 36px 16px 0 var(--ylw), 40px 16px 0 var(--blk), 44px 16px 0 var(--blk),
				0px 20px 0 var(--blk), 4px 20px 0 var(--blk), 8px 20px 0 var(--blk), 12px 20px 0 var(--blk), 16px 20px 0 var(--blk), 20px 20px 0 var(--blk), 24px 20px 0 var(--blk), 28px 20px 0 var(--blk), 32px 20px 0 var(--blk), 36px 20px 0 var(--blk), 40px 20px 0 var(--blk), 44px 20px 0 var(--blk),
				0px 24px 0 var(--blk), 4px 24px 0 var(--blk), 8px 24px 0 var(--blk), 12px 24px 0 var(--blk), 16px 24px 0 var(--blk), 20px 24px 0 var(--wht), 24px 24px 0 var(--gry), 28px 24px 0 var(--blk), 32px 24px 0 var(--blk), 36px 24px 0 var(--blk), 40px 24px 0 var(--blk), 44px 24px 0 var(--blk),
				0px 28px 0 var(--blk), 4px 28px 0 var(--wht), 8px 28px 0 var(--blk), 12px 28px 0 var(--blk), 16px 28px 0 var(--blk), 20px 28px 0 var(--gry), 24px 28px 0 var(--gry), 28px 28px 0 var(--blk), 32px 28px 0 var(--blk), 36px 28px 0 var(--blk), 40px 28px 0 var(--gry), 44px 28px 0 var(--blk),
				4px 32px 0 var(--blk), 8px 32px 0 var(--wht), 12px 32px 0 var(--wht), 16px 32px 0 var(--wht), 20px 32px 0 var(--blk), 24px 32px 0 var(--blk), 28px 32px 0 var(--gry), 32px 32px 0 var(--gry), 36px 32px 0 var(--gry), 40px 32px 0 var(--blk),
				4px 36px 0 var(--blk), 8px 36px 0 var(--gry), 12px 36px 0 var(--wht), 16px 36px 0 var(--wht), 20px 36px 0 var(--wht), 24px 36px 0 var(--gry), 28px 36px 0 var(--gry), 32px 36px 0 var(--gry), 36px 36px 0 var(--gry), 40px 36px 0 var(--blk),
				8px 40px 0 var(--blk), 12px 40px 0 var(--blk), 16px 40px 0 var(--gry), 20px 40px 0 var(--gry), 24px 40px 0 var(--gry), 28px 40px 0 var(--gry), 32px 40px 0 var(--blk), 36px 40px 0 var(--blk),
				16px 44px 0 var(--blk), 20px 44px 0 var(--blk), 24px 44px 0 var(--blk), 28px 44px 0 var(--blk)
			;
		}
		&#master {
			animation-delay: 0.75s;
			margin: -4px 0 0 162px;
			box-shadow:
				16px 0 0 var(--blk), 20px 0 0 var(--blk), 24px 0 0 var(--blk), 28px 0 0 var(--blk),
				8px 4px 0 var(--blk), 12px 4px 0 var(--blk), 16px 4px 0 var(--ppl), 20px 4px 0 var(--ppl), 24px 4px 0 var(--ppl), 28px 4px 0 var(--ppl), 32px 4px 0 var(--blk), 36px 4px 0 var(--blk),
				4px 8px 0 var(--blk), 8px 8px 0 var(--pnk), 12px 8px 0 var(--pnk), 16px 8px 0 var(--ppl), 20px 8px 0 var(--ppl), 24px 8px 0 var(--ppl), 28px 8px 0 var(--ppl), 32px 8px 0 var(--pnk), 36px 8px 0 var(--pnk), 40px 8px 0 var(--blk),
				4px 12px 0 var(--blk), 8px 12px 0 var(--pnk), 12px 12px 0 var(--wht), 16px 12px 0 var(--wht), 20px 12px 0 var(--ppl), 24px 12px 0 var(--ppl), 28px 12px 0 var(--wht), 32px 12px 0 var(--wht), 36px 12px 0 var(--pnk), 40px 12px 0 var(--blk),
				0px 16px 0 var(--blk), 4px 16px 0 var(--ppl), 8px 16px 0 var(--ppl), 12px 16px 0 var(--wht), 16px 16px 0 var(--ppl), 20px 16px 0 var(--wht), 24px 16px 0 var(--wht), 28px 16px 0 var(--ppl), 32px 16px 0 var(--wht), 36px 16px 0 var(--ppl), 40px 16px 0 var(--ppl), 44px 16px 0 var(--blk),
				0px 20px 0 var(--blk), 4px 20px 0 var(--ppl), 8px 20px 0 var(--ppl), 12px 20px 0 var(--ppl), 16px 20px 0 var(--ppl), 20px 20px 0 var(--blk), 24px 20px 0 var(--blk), 28px 20px 0 var(--ppl), 32px 20px 0 var(--ppl), 36px 20px 0 var(--ppl), 40px 20px 0 var(--ppl), 44px 20px 0 var(--blk),
				0px 24px 0 var(--blk), 4px 24px 0 var(--blk), 8px 24px 0 var(--ppl), 12px 24px 0 var(--ppl), 16px 24px 0 var(--blk), 20px 24px 0 var(--wht), 24px 24px 0 var(--gry), 28px 24px 0 var(--blk), 32px 24px 0 var(--ppl), 36px 24px 0 var(--ppl), 40px 24px 0 var(--blk), 44px 24px 0 var(--blk),
				0px 28px 0 var(--blk), 4px 28px 0 var(--wht), 8px 28px 0 var(--blk), 12px 28px 0 var(--blk), 16px 28px 0 var(--blk), 20px 28px 0 var(--gry), 24px 28px 0 var(--gry), 28px 28px 0 var(--blk), 32px 28px 0 var(--blk), 36px 28px 0 var(--blk), 40px 28px 0 var(--gry), 44px 28px 0 var(--blk),
				4px 32px 0 var(--blk), 8px 32px 0 var(--wht), 12px 32px 0 var(--wht), 16px 32px 0 var(--wht), 20px 32px 0 var(--blk), 24px 32px 0 var(--blk), 28px 32px 0 var(--gry), 32px 32px 0 var(--gry), 36px 32px 0 var(--gry), 40px 32px 0 var(--blk),
				4px 36px 0 var(--blk), 8px 36px 0 var(--gry), 12px 36px 0 var(--wht), 16px 36px 0 var(--wht), 20px 36px 0 var(--wht), 24px 36px 0 var(--gry), 28px 36px 0 var(--gry), 32px 36px 0 var(--gry), 36px 36px 0 var(--gry), 40px 36px 0 var(--blk),
				8px 40px 0 var(--blk), 12px 40px 0 var(--blk), 16px 40px 0 var(--gry), 20px 40px 0 var(--gry), 24px 40px 0 var(--gry), 28px 40px 0 var(--gry), 32px 40px 0 var(--blk), 36px 40px 0 var(--blk),
				16px 44px 0 var(--blk), 20px 44px 0 var(--blk), 24px 44px 0 var(--blk), 28px 44px 0 var(--blk)
			;
		}
		&#safari {
            animation-delay: 1s;
            margin: -4px 0 0 216px;
            box-shadow:
                16px 0 0 var(--blk), 20px 0 0 var(--blk), 24px 0 0 var(--blk), 28px 0 0 var(--blk),
                8px 4px 0 var(--blk), 12px 4px 0 var(--blk), 16px 4px 0 var(--brw), 20px 4px 0 var(--brw), 24px 4px 0 var(--mos), 28px 4px 0 var(--grn), 32px 4px 0 var(--blk), 36px 4px 0 var(--blk),
                4px 8px 0 var(--blk), 8px 8px 0 var(--mos), 12px 8px 0 var(--mos), 16px 8px 0 var(--mos), 20px 8px 0 var(--brw), 24px 8px 0 var(--brw), 28px 8px 0 var(--grn), 32px 8px 0 var(--mos), 36px 8px 0 var(--brw), 40px 8px 0 var(--blk),
                4px 12px 0 var(--blk), 8px 12px 0 var(--brw), 12px 12px 0 var(--brw), 16px 12px 0 var(--brw), 20px 12px 0 var(--brw), 24px 12px 0 var(--brw), 28px 12px 0 var(--grn), 32px 12px 0 var(--mos), 36px 12px 0 var(--mos), 40px 12px 0 var(--blk),
                0px 16px 0 var(--blk), 4px 16px 0 var(--grn), 8px 16px 0 var(--mos), 12px 16px 0 var(--grn), 16px 16px 0 var(--grn), 20px 16px 0 var(--mos), 24px 16px 0 var(--mos), 28px 16px 0 var(--mos), 32px 16px 0 var(--grn), 36px 16px 0 var(--brw), 40px 16px 0 var(--brw), 44px 16px 0 var(--blk),
                0px 20px 0 var(--blk), 4px 20px 0 var(--grn), 8px 20px 0 var(--mos), 12px 20px 0 var(--grn), 16px 20px 0 var(--mos), 20px 20px 0 var(--blk), 24px 20px 0 var(--blk), 28px 20px 0 var(--mos), 32px 20px 0 var(--mos), 36px 20px 0 var(--grn), 40px 20px 0 var(--grn), 44px 20px 0 var(--blk),
                0px 24px 0 var(--blk), 4px 24px 0 var(--blk), 8px 24px 0 var(--mos), 12px 24px 0 var(--mos), 16px 24px 0 var(--blk), 20px 24px 0 var(--wht), 24px 24px 0 var(--gry), 28px 24px 0 var(--blk), 32px 24px 0 var(--brw), 36px 24px 0 var(--brw), 40px 24px 0 var(--blk), 44px 24px 0 var(--blk),
                0px 28px 0 var(--blk), 4px 28px 0 var(--wht), 8px 28px 0 var(--blk), 12px 28px 0 var(--blk), 16px 28px 0 var(--blk), 20px 28px 0 var(--gry), 24px 28px 0 var(--gry), 28px 28px 0 var(--blk), 32px 28px 0 var(--blk), 36px 28px 0 var(--blk), 40px 28px 0 var(--gry), 44px 28px 0 var(--blk),
                4px 32px 0 var(--blk), 8px 32px 0 var(--wht), 12px 32px 0 var(--wht), 16px 32px 0 var(--wht), 20px 32px 0 var(--blk), 24px 32px 0 var(--blk), 28px 32px 0 var(--gry), 32px 32px 0 var(--gry), 36px 32px 0 var(--gry), 40px 32px 0 var(--blk),
                4px 36px 0 var(--blk), 8px 36px 0 var(--gry), 12px 36px 0 var(--wht), 16px 36px 0 var(--wht), 20px 36px 0 var(--wht), 24px 36px 0 var(--gry), 28px 36px 0 var(--gry), 32px 36px 0 var(--gry), 36px 36px 0 var(--gry), 40px 36px 0 var(--blk),
                8px 40px 0 var(--blk), 12px 40px 0 var(--blk), 16px 40px 0 var(--gry), 20px 40px 0 var(--gry), 24px 40px 0 var(--gry), 28px 40px 0 var(--gry), 32px 40px 0 var(--blk), 36px 40px 0 var(--blk),
                16px 44px 0 var(--blk), 20px 44px 0 var(--blk), 24px 44px 0 var(--blk), 28px 44px 0 var(--blk)
            ;
        }
	}
`;

export default function UILoadingScreen() {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex flex-col space-y-5 items-center">
				<Loader />
				<p>Chargement en cours...</p>
			</div>
		</div>
	)
}
