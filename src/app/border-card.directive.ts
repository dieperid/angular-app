import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
	selector: "[ftblBorderCard]",
})
export class BorderCardDirective {
	private initialColor: string = "#f5f5f5";
	private defaultColor: string = "#009688";
	private defaultHeight: number = 180;

	constructor(private el: ElementRef) {
		this.setHeight(this.defaultHeight);
		this.setBorder(this.initialColor);
	}

	/**
	 * Take the input from the html to get the border color
	 *
	 * @type {string}
	 * @memberof BorderCardDirective
	 */
	@Input("ftblBorderCard") borderColor: string;

	/**
	 * HostListener to record the mouse enter event
	 *
	 * @memberof BorderCardDirective
	 */
	@HostListener("mouseenter")
	onMouseEnter() {
		this.setBorder(this.borderColor || this.defaultColor);
	}

	/**
	 * HostListener to record the mouse leave event
	 *
	 * @memberof BorderCardDirective
	 */
	@HostListener("mouseleave") onMouseLeave() {
		this.setBorder(this.initialColor);
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
