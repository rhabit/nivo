/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import { dotsThemePropType } from '../../theming'
import DotsItemSymbol from './DotsItemSymbol'

const DotsItem = ({
    x,
    y,
    symbol,
    size,
    datum,
    color,
    borderWidth,
    borderColor,
    label,
    labelTextAnchor,
    labelYOffset,
    dotXOffset,
    dotYOffset,
    theme,
}) => (
    <g transform={`translate(${x + dotXOffset}, ${y + dotYOffset})`} style={{ pointerEvents: 'none' }}>
        {React.createElement(symbol, {
            size: size,
            color: color,
            datum: datum,
            borderWidth: borderWidth,
            borderColor: borderColor,
        })}
        {label && (
            <text textAnchor={labelTextAnchor} y={labelYOffset} style={theme.dots.text}>
                {label}
            </text>
        )}
    </g>
)

DotsItem.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    datum: PropTypes.object.isRequired,

    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    borderWidth: PropTypes.number.isRequired,
    borderColor: PropTypes.string.isRequired,

    symbol: PropTypes.func.isRequired,

    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    labelTextAnchor: PropTypes.oneOf(['start', 'middle', 'end']),
    labelYOffset: PropTypes.number.isRequired,
    dotXOffset: PropTypes.number.isRequired,
    dotYOffset: PropTypes.number.isRequired,

    theme: PropTypes.shape({
        dots: dotsThemePropType.isRequired,
    }).isRequired,
}

export const DotsItemDefaultProps = {
    symbol: DotsItemSymbol,

    // label
    labelTextAnchor: 'middle',
    labelYOffset: -12,
    dotXOffset: 0,
    dotYOffset: 0,
}

DotsItem.defaultProps = DotsItemDefaultProps

export default pure(DotsItem)
