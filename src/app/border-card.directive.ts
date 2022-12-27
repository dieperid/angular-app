import { Directive, ElementRef } from "@angular/core";

@Directive({
	selector: "[appBorderCard]",
})
export class BorderCardDirective {
	constructor(private el: ElementRef) {
		this.setHeight(180);
		this.setBorder("#f5f5f5");
	}

	/**
	 * Function to set the height of the border card
	 *
	 * @param {number} height
	 * @memberof BorderCardDirective
	 */
	setHeight(height: number) {
		this.el.nativeElement.style.height = `${height}px`;
	}

	/**
	 * Function to set the color of the border card
	 *
	 * @param {string} color
	 * @memberof BorderCardDirective
	 */
	setBorder(color: string) {
		this.el.nativeElement.style.border = `solid 4px ${color}`;
	}
}
