import React from 'react'
import { ICategoryBarProps } from '../../types'

import './CategoryBar.css'

const CategoryBar: React.FC<ICategoryBarProps> = ({
    dashboardState,
    setDashboardState
}) => {
    const handleClick = (category: string) => {
        setDashboardState(prevState => ({
            ...prevState,
            currentCategory: category
        }))
    }

    const getCategoryClassName = (category: string) => {
        return category === dashboardState.currentCategory ? 'category-button active' : 'category-button'
    }

    return (
        <div className='category-bar'>
            {dashboardState.categories?.map((category: string) => (
                <React.Fragment key={category}>
                    {' '}
                    &gt;{' '}
                    <button
                        className={getCategoryClassName(category)}
                        onClick={() => handleClick(category)}>
                        {category}
                    </button>{' '}
                </React.Fragment>
            ))}
        </div>
    )
}

export default CategoryBar
