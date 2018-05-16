// @flow

import React, { Component, Fragment, type Node } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { DropdownItem } from '@streamr/streamr-layout'
import Skeleton from 'react-loading-skeleton'

import { formatPath } from '../../utils/url'
import { productStates, timeUnits } from '../../utils/constants'
import PaymentRate from '../PaymentRate'
import links from '../../links'
import type { Product, ProductId } from '../../flowtype/product-types'
import threeDots from '../../../assets/three-dots.png'
import Dropdown from '../ProductPageEditor/ProductDetailsEditor/Dropdown'
import { isPaidProduct } from '../../utils/product'
import { isActive } from '../../utils/time'
import withErrorBoundary from '../../utils/withErrorBoundary'
import ErrorComponentView from '../ErrorComponentView'

import { Logo } from './Logo'
import styles from './productTile.pcss'

export type Props = {
    source: Product,
    showOwner?: boolean,
    showPrice?: boolean,
    showSubscriptionStatus?: boolean,
    showPublishStatus?: boolean,
    showDropdownMenu?: boolean,
    redirectToEditProduct?: (id: ProductId) => void,
    showPublishDialog?: (product: Product) => void,
}

export type State = {
    loaded: boolean,
}

class ProductTile extends Component<Props, State> {
    static defaultProps = {
        showOwner: true,
        showPrice: true,
        showSubscriptionStatus: true,
        showPublishStatus: true,
    }

    constructor(props: Props) {
        super(props)
        this.state = {
            loaded: !props.source.imageUrl,
        }
    }

    onImageLoad = () => {
        this.setState({
            loaded: true,
        })
    }

    // Trying to be a short function name meaning "getSkeleton"
    gs = (item: ?Node) => (!this.state.loaded ? <Skeleton color="#F5F5F5" /> : (item || null))

    render() {
        const {
            source,
            showOwner,
            showPrice,
            showSubscriptionStatus,
            showPublishStatus,
            showDropdownMenu,
            redirectToEditProduct,
            showPublishDialog,
        } = this.props
        const {
            id,
            name,
            owner,
            imageUrl,
            pricePerSecond,
            priceCurrency,
            state: productState,
        } = source

        return (
            <Fragment>
                {showDropdownMenu &&
                    <Dropdown
                        className={styles.dropdown}
                        title={
                            <img src={threeDots} alt="Actions" className={styles.threeDots} />
                        }
                    >
                        <DropdownItem onClick={() => (!!redirectToEditProduct && redirectToEditProduct(id || ''))}>
                            Edit
                        </DropdownItem>
                        <DropdownItem onClick={() => (!!showPublishDialog && showPublishDialog(source))}>
                            {(productState === productStates.DEPLOYED) ? 'Unpublish' : 'Publish'}
                        </DropdownItem>
                    </Dropdown>
                }
                <Link
                    to={formatPath(links.products, id || '')}
                    className={classnames(styles.productTile, {
                        [styles.loading]: !this.state.loaded,
                    })}
                >
                    {imageUrl ? (
                        <Fragment>
                            {!this.state.loaded && (
                                <img
                                    onLoad={this.onImageLoad}
                                    src={imageUrl}
                                    className={styles.invisible}
                                    alt="Product"
                                />
                            )}
                            <div
                                className={styles.productImage}
                                style={{
                                    backgroundImage: `url(${imageUrl})`,
                                }}
                            >
                                {this.gs()}
                            </div>
                        </Fragment>
                    ) : (
                        <div className={classnames(styles.defaultImagePlaceholder, styles.productImage)}>
                            <Logo color="black" opacity="0.15" />
                        </div>
                    )}
                    <div className={styles.row}>
                        <div className={styles.name}>
                            {this.gs(name)}
                        </div>
                    </div>
                    <div className={styles.row}>
                        {showOwner && (
                            <div className={styles.owner}>
                                {this.gs(owner)}
                            </div>
                        )}
                    </div>
                    <div className={styles.row}>
                        {showPrice && productState === productStates.DEPLOYED && (
                            <div className={styles.price}>
                                {this.gs(!isPaidProduct(source) && 'Free') || (
                                    <PaymentRate
                                        amount={pricePerSecond}
                                        currency={priceCurrency}
                                        timeUnit={timeUnits.hour}
                                        maxDigits={4}
                                    />
                                )}
                            </div>
                        )}
                        {showSubscriptionStatus && (
                            <div className={styles.subscriptionStatus}>
                                {this.gs((!source.endTimestamp || isActive(source.endTimestamp)) ? 'Active' : 'Expired')}
                            </div>
                        )}
                        {showPublishStatus && (
                            <div className={styles.publishStatusContainer}>
                                {productState === productStates.DEPLOYED ?
                                    this.gs(<span className={styles.publishStatus}>Published</span>) :
                                    this.gs(<span className={styles.publishStatus}>Draft</span>)
                                }
                            </div>
                        )}
                    </div>
                </Link>
            </Fragment>
        )
    }
}

export default withErrorBoundary(ErrorComponentView)(ProductTile)
