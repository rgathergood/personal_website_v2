import { trigger, animate, transition, style, stagger, query } from '@angular/animations';

export const fadeAnimation =
    trigger('fade', [
        transition('* <=> *', [
            query('*', [
                style({ opacity: 0 }),
                stagger('100ms', [
                    animate('600ms', style('*'))
                ])
            ])
        ])
    ]);
